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
  params: z.object({
    id: z.coerce.number(),
  }),
});

export const createTaskSchema = z.object({
  text: z.string(),
  userId: z.number().int().positive(),
});

export const updateTaskSchema = z.object({
  body: z.object({
    text: z.string(),
  }),
  params: z.object({
    id: z.coerce.number(),
  }),
});

export const deleteTaskSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskBody = z.infer<typeof updateTaskSchema>["body"];
export type DeleteTaskParams = z.infer<typeof updateTaskSchema>["params"];
