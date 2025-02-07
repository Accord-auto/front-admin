import { getProductArticle } from "../../shared/api/productsApi";

export const funcGetProductArticle = async (article) => {
  const res = await getProductArticle(article);
  return res;
};
