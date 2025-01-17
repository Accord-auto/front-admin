import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.characteristics;

export const selectCharacteristicsData = createSelector([root], (rootData) => ({
  characteristics: rootData.characteristics,
  status: rootData.status,
  error: rootData.error,
}));
