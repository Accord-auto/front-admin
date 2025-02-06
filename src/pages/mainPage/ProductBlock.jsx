import del from "../../assets/images/delete.svg";
import check from "../../assets/images/check.svg";
import cross from "../../assets/images/cross.svg";
import correct from "../../assets/images/correct.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMiniCatalogThunk,
  removeProductThunk,
  toggleOfferProductThunk,
} from "../../features/miniCatalogFeature/miniCatalogSlice";
import { selectMiniCatalogData } from "../../features/miniCatalogFeature/miniCatalogSelector";
import { useEffect, useState } from "react";
import Modal from "../../shared/components/ModalWindow/ModalWindow";

export const ProductBlock = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { status, error } = useSelector(selectMiniCatalogData);
  const spOffer = info.specialOffer;
  const price = {
    cost: info.price.discount !== 0 ? info.price.discount : info.price.value,
    discount: info.price.discount !== 0,
  };

  useEffect(() => {
    if (
      status === "successfully/deleteProduct" ||
      status === "successfully/toggleOffer"
    ) {
      dispatch(fetchMiniCatalogThunk());
    }
  }, [status]);

  if (status === "failed/deleteProduct" || status === "failed/toggleOffer") {
    alert("Ошибка: " + error);
  }

  const removeProduct = () => {
    dispatch(removeProductThunk(info.id));
  };

  const toggleOffer = () => {
    dispatch(toggleOfferProductThunk(info.id));
  };

  return (
    <>
      <tr className="tr-cat">
        <td className="td-cat">{info.customerArticle}</td>
        <td className="td-cat">{info.categoryName}</td>
        <td className="td-cat">{info.name}</td>
        <td className="td-cat">{info.brand}</td>
        <td className="td-cat">{info.count}</td>
        <td className="td-cat">
          {spOffer ? (
            <img
              className="td-img-cat"
              src={check}
              alt=""
              onClick={toggleOffer}
            />
          ) : (
            <img
              className="td-img-cat"
              src={cross}
              alt=""
              onClick={toggleOffer}
            />
          )}
        </td>
        <td className={price.discount ? "td-cat td-cat-color" : "td-cat"}>
          {price.cost}
        </td>
        <td className="td-cat td-cat-cont">
          <img
            className="td-img-cat"
            src={del}
            alt=""
            onClick={() => setModalIsOpen(true)}
          />
          <img
            className="td-img-cat"
            src={correct}
            alt=""
            onClick={() => navigate(`/changeProduct/${info.id}`)}
          />
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        func={() => removeProduct(info.id)}
      >
        <p>
          При удалении товара он будет безвозвратно удален(так же и с основного
          сайта).
          <br /> Вы хотите удалить товар?
        </p>
      </Modal>{" "}
    </>
  );
};
