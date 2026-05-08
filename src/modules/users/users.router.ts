import express, { Request, Response } from "express";
const usersRouter = express.Router();
import * as userController from "./users.controller";

usersRouter.get("/", async (req: Request, res: Response) => {
  return await userController.getAllusers(req, res);
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  return userController.getUserById(req, res);
});

usersRouter.post("/", async (req: Request, res: Response) => {
  return await userController.createUser(req, res);
});

usersRouter.patch("/:id", async (req: Request, res: Response) => {
  return userController.updateUser(req, res);
});

usersRouter.delete("/:id", async (req: Request, res: Response) => {
  return userController.deleteUser(req, res);
});

export default usersRouter;
