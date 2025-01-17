import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  funcFetchArticles,
  funcAddArticle,
  funcRemoveArticle,
} from "./articlesFunctions";

export const fetchArticlesThunk = createAsyncThunk(
  "articles/fetchArticles",
  funcFetchArticles
);

export const addArticleThunk = createAsyncThunk(
  "articles/addArticle",
  funcAddArticle
);

export const removeArticleThunk = createAsyncThunk(
  "articles/removeArticle",
  funcRemoveArticle
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticlesThunk.fulfilled, (state, action) => {
        state.status = "successfully";
        state.articles = action.payload;
      })
      .addCase(fetchArticlesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addArticleThunk.pending, (state) => {
        state.status = "loading/add";
      })
      .addCase(addArticleThunk.fulfilled, (state) => {
        state.status = "successfully/add";
      })
      .addCase(addArticleThunk.rejected, (state, action) => {
        state.status = "failed/add";
        state.error = action.error.message;
      })
      .addCase(removeArticleThunk.fulfilled, (state) => {
        state.status = "successfully/remove";
      })
      .addCase(removeArticleThunk.rejected, (state, action) => {
        state.status = "failed/remove";
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;
