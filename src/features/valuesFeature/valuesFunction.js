import { fetchValues, addValue, removeValue } from "../../shared/api/valuesApi";
import { selectAuthData } from "../authFeature/authSelector";

export const funcFetchValues = async (id) => {
  const res = await fetchValues(id);
  return res;
};

export const funcAddValue = async ({ id, name }, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await addValue(id, name, token);
  return res;
};

export const funcRemoveValue = async ({ idC, idV }, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await removeValue(idC, idV, token);
  return res;
};
