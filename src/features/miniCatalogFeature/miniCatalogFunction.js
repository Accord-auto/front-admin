import {
  deleteProduct,
  fetchMiniCatalog,
  toggleOfferProduct,
} from "../../shared/api/productsApi";

export const funcFetchMiniCatalog = async () => {
  const res = await fetchMiniCatalog();
  return res;
};

export const funcDeleteProduct = async (id) => {
  const res = await deleteProduct(id);
  return res;
};

export const funcToggleOfferProduct = async (id) => {
  const res = await toggleOfferProduct(id);
  return res;
};
