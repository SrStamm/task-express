import { Request, Response } from "express";
import * as userService from "./users.service";
import { CreateUserRouterSchema } from "./users.schema";

export const getAllusers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.user.userId);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.status(200).json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email }: CreateUserRouterSchema = req.body;

  const user = await userService.createUser({
    name: name,
    email: email,
  });
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = await userService.updateUser({
    id: req.user.userId,
    email: email,
    name: name,
  });

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.status(202).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deleted = await userService.deleteUser({ id: req.user.userId });

  if (!deleted) {
    return res.status(404).json({ error: "user not found" });
  }

  res.status(204).send();
};
