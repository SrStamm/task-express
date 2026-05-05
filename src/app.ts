import express, { Request, Response } from "express";
import tasksRouter from "./modules/tasks/tasks.router";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/tasks", tasksRouter);

export default app;
