import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const authApi = async (form) => {
  console.log(form);
  const res = await axios.post(`${backendUrl}/auth/token`, form);
  return res.data;
};
