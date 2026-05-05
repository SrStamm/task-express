import express, { Request, Response } from "express";
const tasksRouter = express.Router();

interface Task {
  id?: number;
  text: string;
}

let listaTasks: [Task] | [] = [];

tasksRouter.get("/", (req: Request, res: Response) => {
  res.send(listaTasks);
});

tasksRouter.post("/", (req: Request, res: Response) => {
  const body = req.body;
  const task: Task = body;
  task.id = listaTasks.length + 1;

  listaTasks.push(task);

  res.status(201).json(task);
});

export default tasksRouter;
