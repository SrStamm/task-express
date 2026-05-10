import { Request, Response } from "express";
import { CreateTaskBody, UpdateTaskBody } from "./tasks.schema";
import * as taskService from "./tasks.service";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks(req.user?.userId);
  return res.status(200).json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
  const task = await taskService.getTaskById(req.user?.userId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
};

export const createTask = async (req: Request, res: Response) => {
  const { text }: CreateTaskBody = req.body;

  const task = await taskService.createTask({
    userId: req.user?.userId,
    text: text,
  });
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { text }: UpdateTaskBody = req.body;

  const task = await taskService.updateTask({
    id: req.params.id,
    userId: req.user?.userId,
    text: text,
  });

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(202).json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const deleted = await taskService.deleteTask({
    id: req.params.id,
    userId: req.user.userId,
  });

  if (!deleted) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(204).send();
};
