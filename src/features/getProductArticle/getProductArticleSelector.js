import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.productGetArticle;

export const selectProductGetArticleData = createSelector(
  [root],
  (rootData) => ({
    product: rootData.productInfo,
    status: rootData.status,
    error: rootData.error,
  })
);
