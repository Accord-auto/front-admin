import { fetchValues, addValue, removeValue } from "../../shared/api/valuesApi";

export const funcFetchValues = async (id) => {
  const res = await fetchValues(id);
  return res;
};

export const funcAddValue = async ({ id, name }) => {
  const res = await addValue(id, name);
  return res;
};

export const funcRemoveValue = async ({ idC, idV }) => {
  const res = await removeValue(idC, idV);
  return res;
};
