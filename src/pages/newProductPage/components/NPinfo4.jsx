import { useDispatch, useSelector } from "react-redux";
import {
  updateCount,
  updateCountType,
} from "../../../features/newProductFeature/newProductSlice";
import { selectNewProductData } from "../../../features/newProductFeature/newProductSelectors";

/**
 * COMPONENT(COUNT, COUNT TYPE) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPinfo4 = () => {
  const dispatch = useDispatch();
  const { infoProduct } = useSelector(selectNewProductData);

  const onChangeCount = (e) => {
    const value = e.target.value;
    dispatch(updateCount(value === "" ? "" : Number(value)));
  };

  const onChangeCountType = (e) => {
    dispatch(updateCountType(e.target.value));
  };

  return (
    <div className="data-two-cont">
      <input
        type="number"
        placeholder="Кол-во товара"
        className="inp-data"
        value={infoProduct.count ?? ""}
        onChange={onChangeCount}
        required
        name="count"
      />
      <input
        type="text"
        placeholder="Ед. измерения товара"
        className="inp-data"
        required
        value={infoProduct.countType}
        onChange={onChangeCountType}
        name="countType"
      />
    </div>
  );
};
