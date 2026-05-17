import { ZodError } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parse the request data
      const parsedData = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      if (parsedData.body) Object.assign(req.body, parsedData.body);
      if (parsedData.params) Object.assign(req.params, parsedData.params);
      if (parsedData.query) Object.assign(req.query, parsedData.query);

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
