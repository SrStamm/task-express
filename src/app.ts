import express, { Request, Response } from "express";
import tasksRouter from "./modules/tasks/tasks.router";
import userRouter from "./modules/users/users.router";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/tasks", tasksRouter);
app.use("/users", userRouter);

export default app;
