import express, { Request, Response } from "express";
const tasksRouter = express.Router();
import { Task } from "../models/Task";
import * as taskController from "../controllers/Task";

let listTasks: Task[] = [];

tasksRouter.get("/", (req: Request, res: Response) => {
  return taskController.getAllTasks(req, res);
});

tasksRouter.get("/:id", (req: Request, res: Response) => {
  return taskController.getTaskById(req, res);
});

tasksRouter.post("/", (req: Request, res: Response) => {
  return taskController.createTask(req, res);
});

tasksRouter.patch("/:id", (req: Request, res: Response) => {
  return taskController.updateTask(req, res);
});

tasksRouter.delete("/:id", (req: Request, res: Response) => {
  const taskId = req.params.id;
  const index = listTasks.findIndex((t) => t.id == taskId);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  listTasks.splice(index, 1);

  res.status(204).send();
});

export default tasksRouter;
