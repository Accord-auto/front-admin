import {
  addBranch,
  fetchDepartmentBranches,
  fetchHeadersBranches,
  removeBranch,
} from "../../shared/api/branchesApi";

export const funcFetchDepartmentsBranches = async () => {
  const res = await fetchDepartmentBranches();
  return res;
};

export const funcFetchHeaderBranches = async () => {
  const res = await fetchHeadersBranches();
  return res;
};

export const funcAddBranch = async (body) => {
  const res = await addBranch(body);
  return res;
};

export const funcRemoveBranch = async (id) => {
  const res = await removeBranch(id);
  return res;
};
