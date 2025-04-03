import {
  fetchCategories,
  removeCategory,
  addCategory,
} from "../../shared/api/categoriesApi";
import { selectAuthData } from "../authFeature/authSelector";

export const funcFetchCategories = async () => {
  const res = await fetchCategories();
  return res;
};

export const funcAddCategory = async (categoryName, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await addCategory(categoryName, token);
  return res;
};

export const funcRemoveCategory = async (categoryId, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await removeCategory(categoryId, token);
  return res;
};
