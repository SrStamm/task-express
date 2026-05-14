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
  const { text, userId, projectId } = createTaskSchema.parse(task);
  const newTask = await prisma.task.create({
    data: {
      text: text,
      user: {
        connect: { id: userId },
      },
      project: {
        connect: { id: projectId },
      },
    },
  });
  return newTask;
};

export const updateTask = async (input: UpdateTaskService) => {
  const { id, userId, projectId, text } = updateTaskInput.parse(input);
  const updateTask = await prisma.task.update({
    where: {
      id: id,
      userId: userId,
      projectId: projectId,
    },
    data: { text: text },
  });

  return updateTask;
};

export const deleteTask = async (data: DeleteTaskInput) => {
  const { id, userId, projectId } = deleteTaskInput.parse(data);
  try {
    await prisma.task.delete({
      where: {
        id: id,
        userId: userId,
        projectId: projectId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
