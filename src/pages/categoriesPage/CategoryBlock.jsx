import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCategoryThunk } from "../../features/categoriesFeature/categoriesSlice";
import del from "../../assets/images/delete.svg";
import Modal from "../../shared/components/ModalWindow/ModalWindow";

export const CategoryBlock = ({ categoryInfo }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const removeCategory = (id) => {
    dispatch(removeCategoryThunk(id));
  };

  const closeModal = () => {
    setIsActive(false);
  };
  return (
    <>
      <tr className="tr-cat">
        <td className="td-cat">{categoryInfo.name}</td>
        <td className="td-cat">{categoryInfo.products.length}</td>
        <td className="td-cat">
          <img
            onClick={() => setIsActive(true)}
            className="td-img-cat"
            src={del}
            alt=""
          />
        </td>
      </tr>
      <Modal
        isOpen={isActive}
        onClose={closeModal}
        func={() => removeCategory(categoryInfo.id)}
      >
        <p>
          При удалении категории будут удалены все товары связанные с ней.
          <br /> Вы хотите удалить категорию?
        </p>
      </Modal>
    </>
  );
};
