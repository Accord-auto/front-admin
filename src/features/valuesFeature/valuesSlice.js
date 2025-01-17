import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcAddValue,
  funcFetchValues,
  funcRemoveValue,
} from "./valuesFunction";

export const fetchValuesThunk = createAsyncThunk(
  "values/fetchValues",
  funcFetchValues
);

export const addValueThunk = createAsyncThunk("values/addValue", funcAddValue);

export const removeValueThunk = createAsyncThunk(
  "values/removeValue",
  funcRemoveValue
);

const valuesSlice = createSlice({
  name: "values",
  initialState: {
    values: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchValuesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchValuesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.values = action.payload.values;
      })
      .addCase(fetchValuesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addValueThunk.fulfilled, (state) => {
        state.status = "successfully/add";
      })
      .addCase(addValueThunk.rejected, (state, action) => {
        state.status = "failed/add";
        state.error = action.error.message;
      })
      .addCase(removeValueThunk.fulfilled, (state) => {
        state.status = "successfully/remove";
      })
      .addCase(removeValueThunk.rejected, (state, action) => {
        state.status = "failed/remove";
        state.error = action.error.message;
      });
  },
});

export default valuesSlice.reducer;
