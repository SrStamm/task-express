import express from "express";
import * as taskController from "./tasks.controller";
import { verifyAuth } from "../../middlewares/auth";

const tasksRouter = express.Router();

tasksRouter.get("/", verifyAuth, taskController.getAllTasks);

tasksRouter.get("/:id", verifyAuth, taskController.getTaskById);

tasksRouter.post("/", verifyAuth, taskController.createTask);

tasksRouter.patch("/:id", verifyAuth, taskController.updateTask);

tasksRouter.delete("/:id", verifyAuth, taskController.deleteTask);

export default tasksRouter;
