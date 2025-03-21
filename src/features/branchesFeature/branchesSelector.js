import { createSelector } from "@reduxjs/toolkit";

const root = (state) => state.newBranch;

export const selectNewPBranchData = createSelector([root], (rootData) => ({
  infoBranch: rootData.InfoBranch,
  departmentsBranches: rootData.departmentsBranches,
  headerBranches: rootData.headerBranches,
  status: rootData.status,
  error: rootData.error,
}));
