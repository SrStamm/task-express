import express, { Request, Response } from "express";
const tasksRouter = express.Router();
import * as taskController from "./tasks.controller";

tasksRouter.get("/", async (req: Request, res: Response) => {
  return await taskController.getAllTasks(req, res);
});

tasksRouter.get("/:id", async (req: Request, res: Response) => {
  return taskController.getTaskById(req, res);
});

tasksRouter.post("/", async (req: Request, res: Response) => {
  return await taskController.createTask(req, res);
});

tasksRouter.patch("/:id", async (req: Request, res: Response) => {
  return taskController.updateTask(req, res);
});

tasksRouter.delete("/:id", async (req: Request, res: Response) => {
  return taskController.deleteTask(req, res);
});

export default tasksRouter;
