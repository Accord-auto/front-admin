import { useDispatch, useSelector } from "react-redux";
import {
  updatePrice,
  updateDiscount,
} from "../../../features/newProductFeature/newProductSlice";
import { selectNewProductData } from "../../../features/newProductFeature/newProductSelectors";

/**
 * COMPONENT(PRICE, DISCOUNT PRICE) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPinfo3 = () => {
  const dispatch = useDispatch();
  const { infoProduct } = useSelector(selectNewProductData);

  const onChangePrice = (e) => {
    dispatch(updatePrice(e.target.value));
  };

  const onChangeDiscount = (e) => {
    dispatch(updateDiscount(e.target.value));
  };

  return (
    <div className="data-two-cont">
      <input
        type="number"
        placeholder="Цена товара"
        className="inp-data"
        value={infoProduct.price.value}
        onChange={onChangePrice}
        required
        name="price"
      />
      <input
        type="number"
        placeholder="Цена товара со скидкой"
        className="inp-data"
        value={infoProduct.price.discount}
        onChange={onChangeDiscount}
        name="priceDiscount"
      />
    </div>
  );
};
