import { prisma } from "../../../lib/prisma";
import {
  CreateProjectInput,
  createProjectkSchema,
  UserInProjectSchema,
  userInToProjectSchema,
} from "./project.schema";

export const getAllProjects = async () => {
  return await prisma.project.findMany();
};

export const getProjectById = async (id: number) => {
  return await prisma.project.findUnique({
    where: { id },
    include: {
      users: true,
      tasks: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const createProject = async (project: CreateProjectInput) => {
  const { title, userId } = createProjectkSchema.parse(project);
  return await prisma.project.create({
    data: {
      title: title,
      users: {
        connect: { id: userId },
      },
    },
  });
};

export const addUserToProject = async (data: UserInProjectSchema) => {
  const { projectId, userId } = userInToProjectSchema.parse(data);
  return await prisma.project.update({
    where: { id: projectId },
    data: {
      users: {
        connect: { id: userId },
      },
    },
  });
};

export const removeUserToProject = async (data: UserInProjectSchema) => {
  const { projectId, userId } = userInToProjectSchema.parse(data);
  return await prisma.project.update({
    where: { id: projectId },
    data: {
      users: {
        disconnect: { id: userId },
      },
    },
  });
};
