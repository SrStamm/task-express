import { z } from "zod";
import { User } from "../users/users.schema";
import { Task } from "../tasks/tasks.schema";

export interface Project {
  id: number;
  title: string;
  users: User[];
  tasks: Task[];
}

export const getProjectRouterSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});

export const createProjectRouterSchema = z.object({
  body: z.object({
    title: z.string(),
  }),
});

export const createProjectkSchema = z.object({
  title: z.string(),
  userId: z.number().int().positive(),
});

export const userInProjectRouterSchema = z.object({
  params: z.object({
    projectId: z.coerce.number(),
    userId: z.coerce.number(),
  }),
});

export const userInToProjectSchema = z.object({
  userId: z.number(),
  projectId: z.number(),
});

export type GetProjectById = z.infer<typeof getProjectRouterSchema>["params"];
export type CreateProjectBody = z.infer<
  typeof createProjectRouterSchema
>["body"];
export type CreateProjectInput = z.infer<typeof createProjectkSchema>;
export type UserInProjectParams = z.infer<
  typeof userInProjectRouterSchema
>["params"];
export type UserInProjectSchema = z.infer<typeof userInToProjectSchema>;
