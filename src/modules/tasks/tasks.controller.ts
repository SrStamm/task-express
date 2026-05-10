import { Request, Response } from "express";
import * as taskService from "./tasks.service";
import { UpdateTaskBody } from "./tasks.schema";

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
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({ error: "El campo 'text' es requerido" });
  }

  const task = await taskService.createTask({
    userId: req.user?.userId,
    text: text,
  });
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userId = req.user?.userId;
  const taskBody: UpdateTaskBody = req.body;

  const task = await taskService.updateTask(id, userId, taskBody);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(202).json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userId = req.user?.userId;

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  const deleted = await taskService.deleteTask(id, userId);

  if (!deleted) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(204).send();
};
