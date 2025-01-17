import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesThunk, removeArticleThunk } from "./articlesSlice";
import { selectArticlesData } from "./ariclesSelector";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/photos`;

export const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector(selectArticlesData);

  useEffect(() => {
    dispatch(fetchArticlesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (status === "successfully/remove" || status === "successfully/add") {
      dispatch(fetchArticlesThunk());
    }
  }, [status]);

  if (status === "failed/remove") {
    alert("Ошибка при удалении статьи" + error);
  }

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }

  if (articles.length === 0) {
    return <p className="comp">Создайте новую статью! &#129402;</p>;
  }

  const removeArticle = (id) => {
    dispatch(removeArticleThunk(id));
  };

  return (
    <>
      <p className="title-page">Ваши статьи</p>
      <div className="article-cont-4">
        {articles.map((article) => (
          <div className="article-cont">
            <div className="article-cont-3">
              <img
                src={`${apiURL}/${article.photoUrl}`}
                className="article-photo"
              ></img>
              <div className="article-cont-2">
                <p className="article-title-2">{article.title}</p>
                <p className="article-text-2">{article.description}</p>
              </div>
            </div>
            <button
              className="article-btn-2"
              onClick={() => {
                removeArticle(article.id);
              }}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
