import { prisma } from "../../../lib/prisma";
import { Task } from "./tasks.schema";

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const getTaskById = async (id: number) => {
  return await prisma.task.findUnique({ where: { id: id } });
};

export const createTask = async (text: string) => {
  const newTask = await prisma.task.create({
    data: {
      text: text,
    },
  });
  return newTask;
};

export const updateTask = async (id: number, taskBody: Task) => {
  const updateTask = await prisma.task.update({
    where: { id: id },
    data: { text: taskBody.text },
  });

  return updateTask;
};

export const deleteTask = async (id: number) => {
  try {
    await prisma.task.delete({ where: { id: id } });
    return true;
  } catch (error) {
    return false;
  }
};
