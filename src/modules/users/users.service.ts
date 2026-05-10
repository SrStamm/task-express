import { prisma } from "../../../lib/prisma";
import { User } from "./users.schema";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id: id } });
};

export const createUser = async (name: string, email: string) => {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  return newUser;
};

export const updateUser = async (userId: number, userBody: User) => {
  const updateUser = await prisma.user.update({
    where: { id: userId },
    data: { name: userBody.name },
  });

  return updateUser;
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({ where: { id: id } });
    return true;
  } catch (error) {
    return false;
  }
};
