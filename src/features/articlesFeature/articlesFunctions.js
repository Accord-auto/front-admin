import {
  fetchArticles,
  addArticle,
  removeArticle,
} from "../../shared/api/articlesApi";
import { selectAuthData } from "../authFeature/authSelector";

export const funcFetchArticles = async () => {
  const res = await fetchArticles();
  return res;
};

export const funcAddArticle = async (form, thunkAPI) => {
  const formData = new FormData();
  formData.append(
    "articleRequestPayload",
    JSON.stringify({
      title: form.title,
      description: form.description,
    })
  );
  formData.append("Photo", form.file);

  const res = await addArticle(formData, thunkAPI);

  return res;
};

export const funcRemoveArticle = async (articleId, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = selectAuthData(state);

  const res = await removeArticle(articleId, token);
  return res;
};
