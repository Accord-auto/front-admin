import { authApi } from "../../shared/api/authApi";

export const funcAuthApi = async (form) => {
  const res = await authApi(form);
  return res;
};
