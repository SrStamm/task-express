import { prisma } from "../../../lib/prisma";
import { Task } from "./tasks.schema";

export const getAllTasks = async (userId: number) => {
  return await prisma.task.findMany({
    where: { userId: userId },
  });
};

export const getTaskById = async (id: number) => {
  return await prisma.task.findUnique({ where: { id: id } });
};

export const createTask = async (userId: number, text: string) => {
  const newTask = await prisma.task.create({
    data: {
      text: text,
      userId: userId,
    },
  });
  return newTask;
};

export const updateTask = async (
  id: number,
  userId: number,
  taskBody: Task,
) => {
  const updateTask = await prisma.task.update({
    where: {
      id: id,
      userId: userId,
    },
    data: { text: taskBody.text },
  });

  return updateTask;
};

export const deleteTask = async (id: number, userId: number) => {
  try {
    await prisma.task.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
