import jwt from "jsonwebtoken";
import "dotenv/config";
import { prisma } from "../../../lib/prisma";
import { Token } from "./auth.schema";

const createToken = (userId: number) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  if (!jwtSecretKey) {
    throw new Error("JWT_SECRET_KEY is not defined in environment variables");
  }

  const data: Token = {
    time: new Date().toISOString(),
    userId: userId,
  };

  return jwt.sign(data, jwtSecretKey, { expiresIn: "2m" });
};

export const login = async (email: string) => {
  const user = await prisma.user.findFirst({ where: { email: email } });

  if (!user) return false;

  return createToken(user.id);
};
