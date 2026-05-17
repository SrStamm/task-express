import express from "express";
import * as projectController from "./project.controller";
import { verifyAuth } from "../../middlewares/auth";
import { validate } from "../../middlewares/validation";
import {
  createProjectRouterSchema,
  deleteProjectRouterSchema,
  getProjectRouterSchema,
  updateProjectRouterSchema,
  userInProjectRouterSchema,
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

projectRouter.post(
  "/:projectId/users/:userId",
  verifyAuth,
  validate(userInProjectRouterSchema),
  projectController.addUserToProject,
);

projectRouter.delete(
  "/:projectId/users/:userId",
  verifyAuth,
  validate(userInProjectRouterSchema),
  projectController.removeUserToProject,
);

projectRouter.patch(
  "/:projectId/",
  verifyAuth,
  validate(updateProjectRouterSchema),
  projectController.updateProject,
);

projectRouter.delete(
  "/:projectId/",
  verifyAuth,
  validate(deleteProjectRouterSchema),
  projectController.deleteProject,
);

export default projectRouter;
