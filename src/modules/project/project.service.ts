import { prisma } from "../../../lib/prisma";
import { CreateProjectInput, createProjectkSchema } from "./project.schema";

export const getAllProjects = async () => {
  return await prisma.project.findMany();
};

export const createProject = async (project: CreateProjectInput) => {
  const data = createProjectkSchema.parse(project);
  return await prisma.project.create({
    data: {
      title: data.title,
      users: {
        connect: { id: data.userId },
      },
    },
  });
};
