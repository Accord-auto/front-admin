import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.auth;

export const selectAuthData = createSelector([root], (rootData) => ({
  form: rootData.form,
  token: rootData.token,
  isAuth: rootData.isAuth,
  status: rootData.status,
  error: rootData.error,
}));
