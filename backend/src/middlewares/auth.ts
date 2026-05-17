import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../modules/auth/auth.service";
import { Token } from "../modules/auth/auth.schema";

export function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const decoded = verifyToken(token) as Token;
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido o expirado" });
  }
}
