import axios from "axios";

const url = import.meta.env.VITE_URL;

interface Login {
  email: string;
}

interface LoginResponse {
  access_token: string;
}

export const loginService = async (data: Login): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(url + "/login", data);
  localStorage.setItem("access_token", res.data.access_token);
  return res.data;
};
