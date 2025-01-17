import { useDispatch, useSelector } from "react-redux";
import correct from "../../../assets/images/correct.svg";
import {
  changeDiscountThunk,
  changePriceThunk,
  getProductThunk,
} from "../../../features/editableProductFeature/editableProductSlice";
import { useParams } from "react-router-dom";
import { selectEditableProductData } from "../../../features/editableProductFeature/editableProductSelector";
import { useEffect } from "react";

export const PriceBlock = ({ value, discount }) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(selectEditableProductData);
  const { id } = useParams();

  useEffect(() => {
    if (
      status === "successfully/changeDiscount" ||
      status === "successfully/changePrice"
    ) {
      dispatch(getProductThunk(id));
    }
  }, [status]);

  if (status === "failed/changePrice" || status === "failed/changeDiscount") {
    alert("Ошибка: " + error);
  }

  const changePrice = () => {
    const newPrice = prompt("Укажите новую цену");

    if (Number(newPrice)) {
      dispatch(changePriceThunk({ id, price: Number(newPrice) }));
    } else {
      alert("Вы ввели неправильные данные");
    }
  };

  const changeDiscount = () => {
    const newPrice = prompt("Укажите новую цену со скидкой");

    if (Number(newPrice)) {
      dispatch(changeDiscountThunk({ id, price: Number(newPrice) }));
    } else {
      alert("Вы ввели неправильные данные");
    }
  };
  return (
    <div className="edit-info-cont">
      <p className="edit-comp-change">
        <span className="offer-text-span">Цена:</span>
        {value}
        <img
          src={correct}
          alt=""
          className="td-img-cat"
          onClick={changePrice}
        />
      </p>
      <p className="edit-comp-change">
        <span className="offer-text-span">Цена со скидкой:</span>
        {discount}
        <img
          src={correct}
          alt=""
          className="td-img-cat"
          onClick={changeDiscount}
        />
      </p>
    </div>
  );
};
