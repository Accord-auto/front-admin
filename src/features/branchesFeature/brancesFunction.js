import { addBranch } from "../../shared/api/branchesApi";

// export const funcFetchCategories = async () => {
//   const res = await fetchCategories();
//   return res;
// };

export const funcAddBranch = async (body) => {
  const res = await addBranch(body);
  return res;
};

// export const funcRemoveCategory = async (categoryId) => {
//   const res = await removeCategory(categoryId);
//   return res;
// };
