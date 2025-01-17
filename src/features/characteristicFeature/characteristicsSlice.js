import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcAddCharacteristic,
  funcFetchCharacteristics,
  funcRemoveCharacteristic,
} from "./characteristicsFunction";

export const fetchCharacteristicsThunk = createAsyncThunk(
  "characteristics/fetchCharacteristics",
  funcFetchCharacteristics
);

export const addCharacteristicThunk = createAsyncThunk(
  "characteristics/addCharacteristic",
  funcAddCharacteristic
);

export const removeCharacteristicThunk = createAsyncThunk(
  "characteristics/removeCharacteristic",
  funcRemoveCharacteristic
);

const characteristicsSlice = createSlice({
  name: "characteristics",
  initialState: {
    characteristics: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacteristicsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacteristicsThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.characteristics = action.payload;
      })
      .addCase(fetchCharacteristicsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCharacteristicThunk.fulfilled, (state) => {
        state.status = "successfully/add";
      })
      .addCase(addCharacteristicThunk.rejected, (state, action) => {
        state.status = "failed/add";
        state.error = action.error.message;
      })
      .addCase(removeCharacteristicThunk.fulfilled, (state) => {
        state.status = "successfully/remove";
      })
      .addCase(removeCharacteristicThunk.rejected, (state, action) => {
        state.status = "failed/remove";
        state.error = action.error.message;
      });
  },
});

export default characteristicsSlice.reducer;
