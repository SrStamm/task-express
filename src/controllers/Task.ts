import { Request, Response } from "express";
import * as taskService from "../services/task";
import { Task } from "../models/Task";

export const getAllTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks();
  return res.status(200).json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const id = req.params.id;

  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
};

export const createTask = (req: Request, res: Response) => {
  const body: Task = req.body;

  const task = taskService.createTask(body.text);

  if (!task) {
    return res.status(400).json({ error: "Task not created" });
  }

  res.status(201).json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const id = req.params.id;
  const taskBody: Task = req.body;

  const task = taskService.updateTask(id, taskBody);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(202).json(task);
};
