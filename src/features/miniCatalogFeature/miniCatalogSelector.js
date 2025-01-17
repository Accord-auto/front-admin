import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.miniCatalog;

export const selectMiniCatalogData = createSelector([root], (rootData) => ({
  products: rootData.products,
  status: rootData.status,
  error: rootData.error,
}));
