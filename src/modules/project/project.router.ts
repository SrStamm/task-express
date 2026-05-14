import express from "express";
import * as projectController from "./project.controller";
import { verifyAuth } from "../../middlewares/auth";
import { validate } from "../../middlewares/validation";
import {
  createProjectRouterSchema,
  getProjectRouterSchema,
} from "./project.schema";

const projectRouter = express.Router();

projectRouter.get("/", projectController.getAllProjects);

projectRouter.get(
  "/:id",
  validate(getProjectRouterSchema),
  projectController.getProjectById,
);

projectRouter.post(
  "/",
  verifyAuth,
  validate(createProjectRouterSchema),
  projectController.createProject,
);

export default projectRouter;
