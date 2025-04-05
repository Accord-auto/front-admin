import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/auth`;

export const authApi = async (form) => {
  const res = await axios.post(`${apiURL}/token`, form);
  return res.data;
};

export const authSecureApi = async (token) => {
  const res = await axios.get(`${backendUrl}/admin/secure`, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": token,
    },
  });
  return res.data;
};

export const logoutApi = async (token) => {
  try {
    const res = await axios.post(`${apiURL}/logout`, null, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": token,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
