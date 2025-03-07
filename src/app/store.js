import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categoriesFeature/categoriesSlice";
import articlesSlice from "../features/articlesFeature/articlesSlice";
import characteristicsSlice from "../features/characteristicFeature/characteristicsSlice";
import valuesSlice from "../features/valuesFeature/valuesSlice";
import newProductSlice from "../features/newProductFeature/newProductSlice";
import miniCatalogSlice from "../features/miniCatalogFeature/miniCatalogSlice";
import editableProductSlice from "../features/editableProductFeature/editableProductSlice";
import getProductArticleSlice from "../features/getProductArticle/getProductArticleSlice";
import newBranchSlice from "../features/branchesFeature/branchesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    articles: articlesSlice,
    characteristics: characteristicsSlice,
    values: valuesSlice,
    newProduct: newProductSlice,
    miniCatalog: miniCatalogSlice,
    editableProduct: editableProductSlice,
    productGetArticle: getProductArticleSlice,
    newBranch: newBranchSlice,
  },
});
