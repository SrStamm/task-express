import { ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parse the request data
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "fail",
          errors: error.issues.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        });
      }
      console.error("Non-Zod Error caught in validation middleware:", error);
      next(error);
    }
  };
