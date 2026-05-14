import { Request, Response } from "express";
import {
  CreateProjectBody,
  DeleteProjectRouterParams,
  GetProjectById,
  UpdateProjectRouterBody,
  UpdateProjectRouterParams,
  UserInProjectParams,
} from "./project.schema";
import * as projectService from "./project.service";

export const getAllProjects = async (req: Request, res: Response) => {
  const projects = await projectService.getAllProjects();
  return res.status(200).json(projects);
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params as unknown as GetProjectById;
  const project = await projectService.getProjectById(id);

  if (!project) {
    return res.status(404).json({ error: "Proyecto no encontrado" });
  }

  return res.status(200).json(project);
};

export const createProject = async (req: Request, res: Response) => {
  const { title }: CreateProjectBody = req.body;

  const project = await projectService.createProject({
    userId: req.user?.userId,
    title: title,
  });
  res.status(201).json(project);
};

export const addUserToProject = async (req: Request, res: Response) => {
  const { userId, projectId } = req.params as unknown as UserInProjectParams;
  const userAdded = await projectService.addUserToProject({
    userId,
    projectId,
  });

  if (!userAdded) {
    return res
      .status(400)
      .json({ error: "No se pudo agregar el usuario al proyecto" });
  }

  return res.status(200).json({ userAdded });
};

export const removeUserToProject = async (req: Request, res: Response) => {
  const { userId, projectId } = req.params as unknown as UserInProjectParams;
  const userRemoved = await projectService.removeUserToProject({
    userId,
    projectId,
  });

  if (!userRemoved) {
    return res
      .status(400)
      .json({ error: "No se pudo remover el usuario al proyecto" });
  }

  return res
    .status(202)
    .json({ message: "Usuario removido del proyecto", projectId });
};

export const updateProject = async (req: Request, res: Response) => {
  const { projectId } = req.params as unknown as UpdateProjectRouterParams;
  const { title }: UpdateProjectRouterBody = req.body;

  const projectUpdated = await projectService.updateProject({
    title,
    projectId,
  });

  if (!projectUpdated) {
    return res.status(400).json({ error: "Error al actualizar el proyecto " });
  }

  return res
    .status(200)
    .json({ message: "Proyecto actualizado", projectUpdated });
};

export const deleteProject = async (req: Request, res: Response) => {
  const { projectId } = req.params as unknown as DeleteProjectRouterParams;

  const projectDeleted = await projectService.deleteProject({
    projectId,
  });

  if (!projectDeleted) {
    return res.status(400).json({ error: "Error al eliminar el proyecto " });
  }

  return res.status(200).json({ message: "Proyecto eliminado" });
};
