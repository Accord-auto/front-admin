import { useDispatch, useSelector } from "react-redux";
import { selectMiniCatalogData } from "../../features/miniCatalogFeature/miniCatalogSelector";
import { ProductBlock } from "./ProductBlock";
import { useEffect } from "react";
import { fetchMiniCatalogThunk } from "../../features/miniCatalogFeature/miniCatalogSlice";

export const ListProducts = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(selectMiniCatalogData);

  useEffect(() => {
    dispatch(fetchMiniCatalogThunk());
  }, [dispatch]);

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }

  if (products?.length === 0) {
    return <p className="comp">Создайте новый товар!</p>;
  }

  return (
    <table className="table-categories">
      <thead>
        <tr className="tr-cat">
          <th className="th-cat th-first-cat">Ун. артикул</th>
          <th className="th-cat">Категория</th>
          <th className="th-cat ">Название</th>
          <th className="th-cat ">Бренд</th>
          <th className="th-cat ">Кол-во</th>
          <th className="th-cat ">Спец. предл.</th>
          <th className="th-cat ">Цена</th>
          <th className="th-cat th-last-cat">Действия</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <ProductBlock info={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
};
