import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.newProduct;

export const selectNewProductData = createSelector([root], (rootData) => ({
  infoProduct: rootData.InfoProduct,
  mainPhoto: rootData.mainPhoto,
  morePhotos: rootData.morePhotos,
  status: rootData.status,
  error: rootData.error,
}));
