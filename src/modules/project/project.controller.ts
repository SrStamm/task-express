import { Request, Response } from "express";
import { CreateProjectBody } from "./project.schema";
import * as projectService from "./project.service";

export const getAllProjects = async (req: Request, res: Response) => {
  const projects = await projectService.getAllProjects();
  return res.status(200).json(projects);
};

export const createProject = async (req: Request, res: Response) => {
  const { title }: CreateProjectBody = req.body;

  const project = await projectService.createProject({
    userId: req.user?.userId,
    title: title,
  });
  res.status(201).json(project);
};
