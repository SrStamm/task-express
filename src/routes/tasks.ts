import express, { Request, Response } from "express";
const tasksRouter = express.Router();

interface Task {
  id: number;
  text: string;
}

let listaTasks: [Task] | [] = [];

tasksRouter.get("/", (req: Request, res: Response) => {
  res.send(listaTasks);
});

export default tasksRouter;
