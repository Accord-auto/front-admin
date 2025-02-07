import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { funcGetProductArticle } from "./getProductArticleFunction";

export const getProductArticleThunk = createAsyncThunk(
  "editableProduct/getProductArticle",
  async (article, thunkAPI) => {
    try {
      return await funcGetProductArticle(article);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productGetArticleSlice = createSlice({
  name: "productGetArticle",
  initialState: {
    productInfo: {},
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductArticleThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductArticleThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.productInfo = action.payload;
      })
      .addCase(getProductArticleThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productGetArticleSlice.reducer;
