import { useDispatch, useSelector } from "react-redux";
import correct from "../../../assets/images/correct.svg";
import { useParams } from "react-router-dom";
import {
  changeCountThunk,
  getProductThunk,
} from "../../../features/editableProductFeature/editableProductSlice";
import { selectEditableProductData } from "../../../features/editableProductFeature/editableProductSelector";
import { useEffect } from "react";

export const CountBlock = ({ count, countType }) => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectEditableProductData);
  const { id } = useParams();

  useEffect(() => {
    if (status === "successfully/changeCount") {
      dispatch(getProductThunk(id));
    }
  }, [status]);

  if (status === "failed/changeCount") {
    alert("Ошибка: " + error);
  }

  const changeCount = () => {
    const newCount = prompt("Укажите новое количество товара");

    if (Number(newCount)) {
      dispatch(changeCountThunk({ id, count: Number(newCount) }));
    } else {
      alert("Вы ввели неправильные данные");
    }
  };
  return (
    <div className="edit-info-cont">
      <p className="edit-comp-change">
        <span className="offer-text-span">Кол-во:</span>
        {count}
        <img
          src={correct}
          alt=""
          className="td-img-cat"
          onClick={changeCount}
        />
      </p>
      <p className="edit-comp-change">
        <span className="offer-text-span">Ед. измерения:</span>
        {countType}
      </p>
    </div>
  );
};
