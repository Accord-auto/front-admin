import { ArticleForm } from "../../features/articlesFeature/ArticleForm";
import { ArticleList } from "../../features/articlesFeature/ArticlesList";
import { Header } from "../../shared/components/Header";
import "./articlesPage.css";

/**
 * ARTICLES PAGE
 * @return JSX element
 */

export const ArticlesPage = () => {
  return (
    <>
      <Header />
      <p className="title-page">Статьи</p>
      <ArticleForm />
      <hr />
      <ArticleList />
    </>
  );
};
