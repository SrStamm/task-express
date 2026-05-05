import { Request, Response } from "express";
import * as taskService from "../services/task";

export const getAllTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks();
  return res.status(200).json(tasks);
};
