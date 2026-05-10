import { Request, Response } from "express";
import * as authService from "./auth.service";

export const login = async (req: Request, res: Response) => {
  // obtener email del body
  const { email } = req.body;

  // llamar al service
  const token = await authService.login(email);

  // si no devuelve nada, es porque no se encontró el user
  if (!token) {
    res.status(400).json({ error: "Usuario no encontrado" });
  }

  // devuelve el token
  res.json({ access_token: token });
};
