import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcDeleteProduct,
  funcFetchMiniCatalog,
  funcToggleOfferProduct,
} from "./miniCatalogFunction";

export const fetchMiniCatalogThunk = createAsyncThunk(
  "minicatalog/fetchMiniCatalog",
  funcFetchMiniCatalog
);

export const removeProductThunk = createAsyncThunk(
  "minicatalog/removeProduct",
  funcDeleteProduct
);

export const toggleOfferProductThunk = createAsyncThunk(
  "minicatalog/toggleOfferProduct",
  funcToggleOfferProduct
);

const miniCatalogSlice = createSlice({
  name: "minicatalog",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMiniCatalogThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMiniCatalogThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.products = action.payload.content;
      })
      .addCase(fetchMiniCatalogThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeProductThunk.fulfilled, (state) => {
        state.status = "successfully/deleteProduct";
      })
      .addCase(removeProductThunk.rejected, (state, action) => {
        state.status = "failed/deleteProduct";
        state.error = action.error.message;
      })
      .addCase(toggleOfferProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(toggleOfferProductThunk.fulfilled, (state) => {
        state.status = "successfully/toggleOffer";
      })
      .addCase(toggleOfferProductThunk.rejected, (state, action) => {
        state.status = "failed/toggleOffer";
        state.error = action.error.message;
      });
  },
});

export default miniCatalogSlice.reducer;
