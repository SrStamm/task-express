import { prisma } from "../../../lib/prisma";
import { Task } from "./tasks.schema";

let listTasks: Task[] = [];
let contador = 0;

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const getTaskById = (id: number) => {
  return listTasks.find((t) => t.id === id);
};

export const createTask = async (text: string) => {
  const newTask = await prisma.task.create({
    data: {
      text: text,
    },
  });
  return newTask;
};

export const updateTask = (id: number, taskBody: Task) => {
  const task = listTasks.find((t) => t.id === id);
  if (!task) {
    return null;
  }
  task.text = taskBody.text;
  return task;
};

export const deleteTask = (id: number) => {
  const task = getTaskById(id);

  if (!task) {
    return false;
  }

  listTasks = listTasks.filter((t) => t.id !== id);
  return true;
};
