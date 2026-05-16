import { Request, Response, NextFunction } from "express";
import { CustomError } from "../types/customError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // 1. Se asume un error 500
  let statusCode = 500;
  let message = "Internal Server Error";

  // 2. Verifica si el error es personalizado
  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // 3. Se verifica si es de Prisma o Zod

  // 4. Log del error
  console.error(`[Error] ${req.method} ${req.url}:`, err);

  // 5. Responde al cliente
  return res.status(statusCode).json({
    status: "error",
    message: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
