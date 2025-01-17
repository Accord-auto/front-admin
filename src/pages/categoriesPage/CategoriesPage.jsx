import { CategoryForm } from "../../features/categoriesFeature/CategoryForm";
import { CategoryList } from "../../features/categoriesFeature/CategoryList";
import { Header } from "../../shared/components/Header";
import "./categoriesPage.css";

/**
 * CATEGORY PAGE
 * @return JSX element
 */

export const CategoriesPage = () => {
  return (
    <>
      <Header />
      <h1 className="title-page">Категории</h1>
      <CategoryForm />
      <CategoryList />
    </>
  );
};
