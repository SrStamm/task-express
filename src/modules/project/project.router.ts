import express from "express";
import * as projectController from "./project.controller";
import { verifyAuth } from "../../middlewares/auth";
import { validate } from "../../middlewares/validation";
import { createProjectRouterSchema } from "./project.schema";

const projectRouter = express.Router();

projectRouter.get("/", projectController.getAllProjects);

projectRouter.post(
  "/",
  verifyAuth,
  validate(createProjectRouterSchema),
  projectController.createProject,
);

export default projectRouter;
