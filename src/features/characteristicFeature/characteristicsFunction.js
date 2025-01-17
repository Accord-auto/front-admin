import {
  addCharacteristics,
  fetchCharacteristics,
  removeCharacteristic,
} from "../../shared/api/characteristicsApi";

export const funcFetchCharacteristics = async () => {
  const res = await fetchCharacteristics();
  return res;
};

export const funcAddCharacteristic = async (name) => {
  const res = await addCharacteristics(name);
  return res;
};

export const funcRemoveCharacteristic = async (id) => {
  const res = await removeCharacteristic(id);
  return res;
};
