import express from "express";
import * as taskController from "./tasks.controller";
import { verifyAuth } from "../../middlewares/auth";
import { validate } from "../../middlewares/validation";
import {
  createTaskRouterSchema,
  deleteTaskRouterSchema,
  updateTaskRouterSchema,
} from "./tasks.schema";

const tasksRouter = express.Router();

tasksRouter.get("/", verifyAuth, taskController.getAllTasks);

tasksRouter.get("/:id", verifyAuth, taskController.getTaskById);

tasksRouter.post(
  "/:projectId",
  verifyAuth,
  validate(createTaskRouterSchema),
  taskController.createTask,
);

tasksRouter.patch(
  "/:projectId/:id",
  verifyAuth,
  validate(updateTaskRouterSchema),
  taskController.updateTask,
);

tasksRouter.delete(
  "/:id",
  verifyAuth,
  validate(deleteTaskRouterSchema),
  taskController.deleteTask,
);

export default tasksRouter;
