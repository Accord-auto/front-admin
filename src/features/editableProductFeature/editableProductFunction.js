import {
  getProduct,
  changePriceProduct,
  changeDiscountProduct,
  changeCountProduct,
} from "../../shared/api/productsApi.js";
import { selectAuthData } from "../authFeature/authSelector.js";

export const funcGetProduct = async (id) => {
  const res = await getProduct(id);
  return res;
};

export const funcChangePriceProduct = async (id, price, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await changePriceProduct(id, price, token);
  return res;
};

export const funcChangeDiscountProduct = async (id, price, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await changeDiscountProduct(id, price, token);
  return res;
};

export const funcChangeCountProduct = async (id, count, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await changeCountProduct(id, count, token);
  return res;
};
