import { z } from "zod";

export interface Task {
  id?: number;
  userId: number;
  text: string;
}

export const createTaskRouterSchema = z.object({
  body: z.object({
    text: z.string(),
  }),
});

export const createTaskSchema = z.object({
  text: z.string(),
  userId: z.number().int().positive(),
});

export const updateTaskRouterSchema = z.object({
  body: z.object({
    text: z.string(),
  }),
  params: z.object({
    id: z.coerce.number(),
  }),
});

export const updateTaskInput = z.object({
  text: z.string(),
  id: z.coerce.number(),
  userId: z.coerce.number(),
});

export const deleteTaskRouterSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});

export const deleteTaskInput = z.object({
  id: z.coerce.number(),
  userId: z.coerce.number(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskBody = z.infer<typeof updateTaskRouterSchema>["body"];
export type UpdateTaskService = z.infer<typeof updateTaskInput>;
export type DeleteTaskParams = z.infer<typeof deleteTaskRouterSchema>["params"];
export type DeleteTaskInput = z.infer<typeof deleteTaskInput>;
