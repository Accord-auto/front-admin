import { store } from "../../app/store";
import {
  clearAuth,
  initializeAuth,
} from "../../features/authFeature/authSlice";

export const verifyTokenOnLoad = (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(clearAuth());
  }
  dispatch(initializeAuth());
};
