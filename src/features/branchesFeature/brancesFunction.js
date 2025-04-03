import {
  addBranch,
  fetchDepartmentBranches,
  fetchHeadersBranches,
  removeBranch,
} from "../../shared/api/branchesApi";
import { selectAuthData } from "../authFeature/authSelector";

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

export const funcRemoveBranch = async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await removeBranch(id, token);
  return res;
};
