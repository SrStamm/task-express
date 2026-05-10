import express from "express";
import * as taskController from "./tasks.controller";
import { verifyAuth } from "../../middlewares/auth";
import { validate } from "../../middlewares/validation";
import { deleteTaskSchema, updateTaskSchema } from "./tasks.schema";

const tasksRouter = express.Router();

tasksRouter.get("/", verifyAuth, taskController.getAllTasks);

tasksRouter.get("/:id", verifyAuth, taskController.getTaskById);

tasksRouter.post("/", verifyAuth, taskController.createTask);

tasksRouter.patch(
  "/:id",
  verifyAuth,
  validate(updateTaskSchema),
  taskController.updateTask,
);

tasksRouter.delete(
  "/:id",
  verifyAuth,
  validate(deleteTaskSchema),
  taskController.deleteTask,
);

export default tasksRouter;
