import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcAddCategory,
  funcFetchCategories,
  funcRemoveCategory,
} from "./categoriesFunctions";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  funcFetchCategories
);

export const addCategoryThunk = createAsyncThunk(
  "categories/addCategory",
  funcAddCategory
);

export const removeCategoryThunk = createAsyncThunk(
  "categories/removeCategory",
  funcRemoveCategory
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCategoryThunk.fulfilled, (state) => {
        state.status = "successfully/add";
      })
      .addCase(addCategoryThunk.rejected, (state, action) => {
        state.status = "failed/add";
        state.error = action.error.message;
      })
      .addCase(removeCategoryThunk.fulfilled, (state) => {
        state.status = "successfully/remove";
      })
      .addCase(removeCategoryThunk.rejected, (state, action) => {
        state.status = "failed/remove";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
