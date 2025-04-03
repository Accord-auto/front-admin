import {
  addCharacteristics,
  fetchCharacteristics,
  removeCharacteristic,
} from "../../shared/api/characteristicsApi";
import { selectAuthData } from "../authFeature/authSelector";

export const funcFetchCharacteristics = async () => {
  const res = await fetchCharacteristics();
  return res;
};

export const funcAddCharacteristic = async (name, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await addCharacteristics(name, token);
  return res;
};

export const funcRemoveCharacteristic = async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await removeCharacteristic(id, token);
  return res;
};
