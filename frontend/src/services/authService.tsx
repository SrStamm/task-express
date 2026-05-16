import axios from "axios";

const url = import.meta.env.VITE_URL;

interface Login {
  email: string;
}

interface Token {
  userId: number;
  time: string;
}

interface LoginResponse {
  access_token: Token;
}

export const loginService = async (data: Login): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(url + "/login", data);
  console.log(res.data);
  return res.data;
};
