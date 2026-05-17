import type { Task } from "./task";
import type { User } from "./user";

export interface Project {
  id: number;
  title: string;
  users: User[];
  tasks: Task[];
}
