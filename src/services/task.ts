import { Task } from "../models/Task";

let listTasks: Task[] = [];

export const getAllTasks = () => {
  return listTasks;
};

export const getTaskById = (id: number) => {
  return listTasks.find((t) => t.id == id);
};

export const createTask = (text: string) => {
  const task: Task = { id: listTasks.length + 1, text };
  listTasks.push(task);
  return task;
};

export const updateTask = (id: number, taskBody: Task) => {
  const task = listTasks.find((t) => t.id == id);
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

  listTasks = listTasks.filter((t) => t == task);
  return true;
};
