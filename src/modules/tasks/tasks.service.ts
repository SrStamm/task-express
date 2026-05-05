import { Task } from "./tasks.schema";

let listTasks: Task[] = [];
let contador = 0;

export const getAllTasks = () => {
  return listTasks;
};

export const getTaskById = (id: number) => {
  return listTasks.find((t) => t.id === id);
};

export const createTask = (text: string) => {
  const task: Task = { id: contador + 1, text };
  contador += 1;
  listTasks.push(task);
  return task;
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
