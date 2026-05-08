import express from "express";
import * as userController from "./users.controller";
import { verifyAuth } from "../../middlewares/auth";

const usersRouter = express.Router();

usersRouter.get("/", userController.getAllusers);

usersRouter.get("/:id", userController.getUserById);

usersRouter.post("/", userController.createUser);

usersRouter.patch("/:id", verifyAuth, userController.updateUser);

usersRouter.delete("/:id", verifyAuth, userController.deleteUser);

export default usersRouter;
