import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.newBranch;

export const selectNewPBranchData = createSelector([root], (rootData) => ({
  infoBranch: rootData.InfoBranch,
  status: rootData.status,
  error: rootData.error,
}));
