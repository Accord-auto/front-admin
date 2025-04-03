import {
  deleteProduct,
  fetchMiniCatalog,
  toggleOfferProduct,
} from "../../shared/api/productsApi";
import { selectAuthData } from "../authFeature/authSelector";

export const funcFetchMiniCatalog = async () => {
  const res = await fetchMiniCatalog();
  return res;
};

export const funcDeleteProduct = async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await deleteProduct(id, token);
  return res;
};

export const funcToggleOfferProduct = async (id) => {
  const res = await toggleOfferProduct(id);
  return res;
};
