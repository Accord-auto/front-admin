import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcChangeCountProduct,
  funcChangeDiscountProduct,
  funcChangePriceProduct,
  funcGetProduct,
} from "./editableProductFunction";

export const getProductThunk = createAsyncThunk(
  "editableProduct/getProduct",
  async (id, thunkAPI) => {
    try {
      return await funcGetProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePriceThunk = createAsyncThunk(
  "editableProduct/changePrice",
  async ({ id, price }, thunkAPI) => {
    try {
      const response = await funcChangePriceProduct(id, price, thunkAPI);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changeDiscountThunk = createAsyncThunk(
  "editableProduct/changeDiscount",
  async ({ id, price }, thunkAPI) => {
    try {
      const response = await funcChangeDiscountProduct(id, price, thunkAPI);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const changeCountThunk = createAsyncThunk(
  "editableProduct/changeCount",
  async ({ id, count }, thunkAPI) => {
    try {
      const response = await funcChangeCountProduct(id, count, thunkAPI);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const editableProductSlice = createSlice({
  name: "editableProduct",
  initialState: {
    productInfo: {},
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.productInfo = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(changePriceThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changePriceThunk.fulfilled, (state, action) => {
        state.status = "successfully/changePrice";
      })
      .addCase(changePriceThunk.rejected, (state, action) => {
        state.status = "failed/changePrice";
        state.error = action.error.message;
      })
      .addCase(changeDiscountThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeDiscountThunk.fulfilled, (state) => {
        state.status = "successfully/changeDiscount";
      })
      .addCase(changeDiscountThunk.rejected, (state, action) => {
        state.status = "failed/changeDiscount";
        state.error = action.error.message;
      })
      .addCase(changeCountThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeCountThunk.fulfilled, (state) => {
        state.status = "successfully/changeCount";
      })
      .addCase(changeCountThunk.rejected, (state, action) => {
        state.status = "failed/changeCount";
        state.error = action.error.message;
      });
  },
});

export default editableProductSlice.reducer;
