import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.values;

export const selectValuesData = createSelector([root], (rootData) => ({
  values: rootData.values,
  status: rootData.status,
  error: rootData.error,
}));
