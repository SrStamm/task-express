import express, { Request, Response } from "express";
const tasksRouter = express.Router();

interface Task {
  id?: number;
  text: string;
}

let listTasks: Task[] = [];

tasksRouter.get("/", (req: Request, res: Response) => {
  res.send(listTasks);
});

tasksRouter.post("/", (req: Request, res: Response) => {
  const body = req.body;
  const task: Task = body;
  task.id = listTasks.length + 1;

  listTasks.push(task);

  res.status(201).json(task);
});

export default tasksRouter;
