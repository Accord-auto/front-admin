import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.articles;

export const selectArticlesData = createSelector([root], (rootData) => ({
  articles: rootData.articles,
  status: rootData.status,
  error: rootData.error,
}));
