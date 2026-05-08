import { Request, Response } from "express";
import * as userService from "./users.service";
import { User } from "./users.schema";

export const getAllusers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.status(200).json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "El campo 'name' es requerido" });
  }

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "El campo 'email' es requerido" });
  }

  const user = await userService.createUser(name, email);
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userBody: User = req.body;

  const user = await userService.updateUser(id, userBody);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.status(202).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  const deleted = await userService.deleteUser(id);

  if (!deleted) {
    return res.status(404).json({ error: "user not found" });
  }

  res.status(204).send();
};
