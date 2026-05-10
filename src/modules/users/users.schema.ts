import { z } from "zod";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserPayload {
  userId: number;
}

export const createUserRouterSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    email: z.string(),
  }),
});

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string(),
});

export const updateUserRouterSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    email: z.string(),
  }),
});

export const updateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  id: z.number(),
});

export const deleteUserSchema = z.object({
  id: z.number(),
});

export type CreateUserRouterSchema = z.infer<
  typeof createUserRouterSchema
>["body"];
export type CreateUserSchema = z.infer<typeof createUserSchema>;

export type UpdateUserRouterSchema = z.infer<
  typeof updateUserRouterSchema
>["body"];
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;

export type DeleteUserSchema = z.infer<typeof deleteUserSchema>;
