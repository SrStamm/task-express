import axios from "axios";

const url = import.meta.env.VITE_URL;

interface Login {
  email: string;
}

interface Register {
  email: string;
  name: string;
}

interface RegisterResponse {
  email: string;
  name: string;
}

interface LoginResponse {
  access_token: string;
}

export const loginService = async (data: Login): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(url + "/login", data);
  return res.data;
};

export const registerService = async (
  data: Register,
): Promise<RegisterResponse> => {
  const res = await axios.post<RegisterResponse>(url + "/users", data);
  return res.data;
};
