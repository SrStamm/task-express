import { prisma } from "../../../lib/prisma";
import {
  CreateTaskInput,
  createTaskSchema,
  deleteTaskInput,
  DeleteTaskInput,
  updateTaskInput,
  UpdateTaskService,
} from "./tasks.schema";

export const getAllTasks = async (userId: number) => {
  return await prisma.task.findMany({
    where: { userId: userId },
  });
};

export const getTaskById = async (id: number) => {
  return await prisma.task.findUnique({ where: { id: id } });
};

export const createTask = async (task: CreateTaskInput) => {
  const data = createTaskSchema.parse(task);
  const newTask = await prisma.task.create({
    data,
  });
  return newTask;
};

export const updateTask = async (input: UpdateTaskService) => {
  const data = updateTaskInput.parse(input);
  const updateTask = await prisma.task.update({
    where: {
      id: data.id,
      userId: data.userId,
    },
    data: { text: data.text },
  });

  return updateTask;
};

export const deleteTask = async (data: DeleteTaskInput) => {
  const validatedData = deleteTaskInput.parse(data);
  try {
    await prisma.task.delete({
      where: {
        id: validatedData.id,
        userId: validatedData.userId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
