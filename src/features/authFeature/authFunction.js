import { authApi, logoutApi } from "../../shared/api/authApi";
import { selectAuthData } from "./authSelector";

export const funcAuthApi = async (form) => {
  const res = await authApi(form);
  return res;
};

export const funcLogoutAuth = async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);
  const res = await logoutApi(token);
  return res;
};
