import express from "express";
import * as userController from "./users.controller";
import { verifyAuth } from "../../middlewares/auth";
import { validate } from "../../middlewares/validation";
import { createUserRouterSchema, updateUserRouterSchema } from "./users.schema";

const usersRouter = express.Router();

usersRouter.get("/", userController.getAllusers);

usersRouter.get("/:id", userController.getUserById);

usersRouter.post(
  "/",
  validate(createUserRouterSchema),
  userController.createUser,
);

usersRouter.patch(
  "/",
  verifyAuth,
  validate(updateUserRouterSchema),
  userController.updateUser,
);

usersRouter.delete("/", verifyAuth, userController.deleteUser);

export default usersRouter;
