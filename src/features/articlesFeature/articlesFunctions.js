import {
  fetchArticles,
  addArticle,
  removeArticle,
} from "../../shared/api/articlesApi";

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

export const funcRemoveArticle = async (articleId) => {
  const res = await removeArticle(articleId);
  return res;
};
