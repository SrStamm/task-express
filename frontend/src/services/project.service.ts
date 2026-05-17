import axios from "axios";
import type { Project } from "../types/project";

const url = import.meta.env.VITE_URL;

export const getProjects = async (): Promise<Project[]> => {
  const res = await axios.get<Project[]>(url + "/projects/");
  return res.data;
};

export const getProjectById = async (id: number): Promise<Project> => {
  const res = await axios.get<Project>(url + `/projects/${id}`);
  return res.data;
};
