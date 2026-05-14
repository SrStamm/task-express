import express, { Request, Response } from "express";
import tasksRouter from "./modules/tasks/tasks.router";
import userRouter from "./modules/users/users.router";
import authRouter from "./modules/auth/auth.router";
import projectRouter from "./modules/project/project.router";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/", authRouter);
app.use("/tasks", tasksRouter);
app.use("/users", userRouter);
app.use("/projects", projectRouter);

export default app;
