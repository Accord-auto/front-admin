import {
  getProduct,
  changePriceProduct,
  changeDiscountProduct,
  changeCountProduct,
} from "../../shared/api/productsApi.js";

export const funcGetProduct = async (id) => {
  const res = await getProduct(id);
  return res;
};

export const funcChangePriceProduct = async (id, price) => {
  const res = await changePriceProduct(id, price);
  return res;
};

export const funcChangeDiscountProduct = async (id, price) => {
  const res = await changeDiscountProduct(id, price);
  return res;
};

export const funcChangeCountProduct = async (id, count) => {
  const res = await changeCountProduct(id, count);
  return res;
};
