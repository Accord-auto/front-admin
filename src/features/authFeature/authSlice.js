import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcAuthApi } from "./authFunction";

export const authThunk = createAsyncThunk(
  "auth/getToken",
  async (form, thunkAPI) => {
    try {
      const res = await funcAuthApi(form);
      if (!res.apiKey) throw new Error("Токен не получен");

      sessionStorage.setItem("token", res.apiKey);
      return res.apiKey;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    form: {
      username: "",
      password: "",
    },
    token: sessionStorage.getItem("token") || null,
    isAuth: !!sessionStorage.getItem("token"),
    status: "idle",
    error: null,
  },
  reducers: {
    updateUsername(state, action) {
      state.form.username = action.payload;
    },
    updatePassword(state, action) {
      state.form.password = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.token = action.payload;
        state.isAuth = true;
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateUsername, updatePassword, logout } = authSlice.actions;

export default authSlice.reducer;
