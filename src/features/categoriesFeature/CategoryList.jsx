import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesThunk } from "./categoriesSlice";
import { useEffect } from "react";
import { selectCategoriesData } from "./categoriesSelector";
import { CategoryBlock } from "../../pages/categoriesPage/CategoryBlock";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector(selectCategoriesData);

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (status === "successfully/remove" || status == "successfully/add") {
      dispatch(fetchCategoriesThunk());
    }
  }, [status]);

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }

  if (categories.length === 0) {
    return <p className="comp">Создайте новую категорию!</p>;
  }
  return (
    <>
      <table className="table-categories">
        <thead>
          <tr className="tr-cat">
            <th className="th-cat th-first-cat">Категория</th>
            <th className="th-cat">Кол-во товаров</th>
            <th className="th-cat th-last-cat">Действия</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryBlock categoryInfo={category} />
          ))}
        </tbody>
      </table>
    </>
  );
};
