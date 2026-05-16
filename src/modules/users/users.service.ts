import { prisma } from "../../../lib/prisma";
import {
  createUserSchema,
  CreateUserSchema,
  deleteUserSchema,
  DeleteUserSchema,
  updateUserSchema,
  UpdateUserSchema,
} from "./users.schema";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id: id } });
};

export const createUser = async (data: CreateUserSchema) => {
  const validatedData = createUserSchema.parse(data);
  return await prisma.user.create({
    data: {
      name: validatedData.name,
      email: validatedData.email,
    },
  });
};

export const updateUser = async (data: UpdateUserSchema) => {
  const validatedData = updateUserSchema.parse(data);

  return await prisma.user.update({
    where: { id: validatedData.id },
    data: { name: validatedData.name },
  });
};

export const deleteUser = async (data: DeleteUserSchema) => {
  const validatedData = deleteUserSchema.parse(data);
  await prisma.user.delete({ where: { id: validatedData.id } });
};
