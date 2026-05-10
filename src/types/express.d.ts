import { UserPayload } from "../modules/users/users.schema";

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
