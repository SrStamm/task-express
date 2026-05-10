import express, { Request, Response } from "express";
import * as authController from "./auth.controller";

const authRouter = express.Router();

authRouter.post("/login", async (req: Request, res: Response) => {
  return await authController.login(req, res);
});

export default authRouter;
