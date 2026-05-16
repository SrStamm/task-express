import { NextFunction, Request, Response } from "express";
import {
  CreateTaskBody,
  CreateTaskParams,
  DeleteTaskParams,
  UpdateTaskBody,
  UpdateTaskParams,
} from "./tasks.schema";
import * as taskService from "./tasks.service";
import { NotFoundError } from "../../types/customError";
import { cathAsync } from "../../utils/cathAsync";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getAllTasks(req.user?.userId);
  return res.status(200).json(tasks);
};

export const getTaskById = cathAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);

    const task = await taskService.getTaskById(id);

    if (!task) {
      throw new NotFoundError("Task with that ID not found");
    }

    res.status(200).json(task);
  },
);

export const createTask = cathAsync(async (req: Request, res: Response) => {
  const { text }: CreateTaskBody = req.body;
  const { projectId } = req.params as unknown as CreateTaskParams;

  const task = await taskService.createTask({
    userId: req.user?.userId,
    text: text,
    projectId: projectId,
  });
  res.status(201).json(task);
});

export const updateTask = cathAsync(async (req: Request, res: Response) => {
  const { text }: UpdateTaskBody = req.body;
  const { id, projectId } = req.params as unknown as UpdateTaskParams;

  const task = await taskService.updateTask({
    id: id,
    userId: req.user?.userId,
    projectId: projectId,
    text: text,
  });

  res.status(202).json(task);
});

export const deleteTask = cathAsync(async (req: Request, res: Response) => {
  const { id, projectId } = req.params as unknown as DeleteTaskParams;

  await taskService.deleteTask({
    id: id,
    userId: req.user.userId,
    projectId: projectId,
  });

  res.status(204).send();
});
