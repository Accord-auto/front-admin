import {
  fetchCategories,
  removeCategory,
  addCategory,
} from "../../shared/api/categoriesApi";

export const funcFetchCategories = async () => {
  const res = await fetchCategories();
  return res;
};

export const funcAddCategory = async (categoryName) => {
  const res = await addCategory(categoryName);
  return res;
};

export const funcRemoveCategory = async (categoryId) => {
  const res = await removeCategory(categoryId);
  return res;
};
