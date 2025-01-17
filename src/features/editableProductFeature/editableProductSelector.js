import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.editableProduct;

export const selectEditableProductData = createSelector([root], (rootData) => ({
  product: rootData.productInfo,
  status: rootData.status,
  error: rootData.error,
}));
