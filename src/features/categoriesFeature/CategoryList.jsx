import { useDispatch, useSelector } from "react-redux";
import del from "../../assets/images/delete.svg";
import { fetchCategoriesThunk, removeCategoryThunk } from "./categoriesSlice";
import { useEffect, useState } from "react";
import { selectCategoriesData } from "./categoriesSelector";
import Modal from "../../shared/components/ModalWindow/ModalWindow";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector(selectCategoriesData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteCategory = (categoryId) => {
    dispatch(removeCategoryThunk(categoryId));
  };

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
            <>
              <tr className="tr-cat" key={category.id}>
                <td className="td-cat">{category.name}</td>
                <td className="td-cat">{category.products.length}</td>
                <td className="td-cat">
                  <img
                    onClick={() => setModalIsOpen(true)}
                    className="td-img-cat"
                    src={del}
                    alt=""
                  />
                </td>
              </tr>
              <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                func={() => deleteCategory(category.id)}
              >
                <p>
                  При удалении категории будут удалены все товары связанные с
                  ней.
                  <br /> Вы хотите удалить категорию?
                </p>
              </Modal>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};
