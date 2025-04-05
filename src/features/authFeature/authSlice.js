import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcAuthApi, funcLogoutAuth } from "./authFunction";

export const authThunk = createAsyncThunk(
  "auth/getToken",
  async (form, thunkAPI) => {
    try {
      const res = await funcAuthApi(form);
      if (!res.apiKey) throw new Error("Токен не получен");

      localStorage.setItem("token", res.apiKey);
      return res.apiKey;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutAuthThunk = createAsyncThunk(
  "auth/logoutAuth",
  funcLogoutAuth
);

const initialState = {
  form: {
    username: "",
    password: "",
  },
  token: null,
  isAuth: false,
  status: "loading",
  error: null,
};

const initializeAuthState = () => {
  const token = localStorage.getItem("token");
  return {
    ...initialState,
    token,
    isAuth: !!token,
    status: "idle",
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: initializeAuthState(),
  reducers: {
    updateUsername(state, action) {
      state.form.username = action.payload;
    },
    updatePassword(state, action) {
      state.form.password = action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuth = false;
      state.status = "idle";
      state.error = null;
      state.form = { username: "", password: "" };
      localStorage.removeItem("token");
    },
    initializeAuth(state) {
      const token = localStorage.getItem("token");
      state.token = token;
      state.isAuth = !!token;
      state.status = "idle";
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
      })
      .addCase(logoutAuthThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAuthThunk.fulfilled, (state) => {
        localStorage.removeItem("token");
        state.token = null;
        state.isAuth = false;
        state.form.username = "";
        state.form.password = "";
        state.form = { username: "", password: "" };
        state.status = "idle";
      })
      .addCase(logoutAuthThunk.rejected, (state, action) => {
        localStorage.removeItem("token");
        state.token = null;
        state.isAuth = false;
        state.form.username = "";
        state.form.password = "";
        state.form = { username: "", password: "" };
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const { updateUsername, updatePassword, clearAuth, initializeAuth } =
  authSlice.actions;

export default authSlice.reducer;
