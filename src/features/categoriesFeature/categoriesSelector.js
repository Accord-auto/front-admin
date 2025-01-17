import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.categories;

export const selectCategoriesData = createSelector([root], (rootData) => ({
  categories: rootData.categories,
  status: rootData.status,
  error: rootData.error,
}));
