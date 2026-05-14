import { Request, Response } from "express";
import {
  AddUserToProjectParams,
  CreateProjectBody,
  GetProjectById,
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
  const { userId, projectId } = req.params as unknown as AddUserToProjectParams;
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
