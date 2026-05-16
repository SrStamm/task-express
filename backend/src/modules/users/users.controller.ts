import { Request, Response } from "express";
import * as userService from "./users.service";
import { CreateUserRouterSchema } from "./users.schema";
import { cathAsync } from "../../utils/cathAsync";

export const getAllusers = cathAsync(async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
});

export const getUserById = cathAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

export const createUser = cathAsync(async (req: Request, res: Response) => {
  const { name, email }: CreateUserRouterSchema = req.body;

  const user = await userService.createUser({
    name: name,
    email: email,
  });

  res.status(201).json(user);
});

export const updateUser = cathAsync(async (req: Request, res: Response) => {
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
});

export const deleteUser = cathAsync(async (req: Request, res: Response) => {
  await userService.deleteUser({ id: req.user.userId });

  res.status(204).send();
});
