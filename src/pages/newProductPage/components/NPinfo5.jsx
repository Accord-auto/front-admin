import { useDispatch, useSelector } from "react-redux";
import {
  updateArticle,
  updateCustomerArticle,
} from "../../../features/newProductFeature/newProductSlice";
import { selectNewProductData } from "../../../features/newProductFeature/newProductSelectors";

/**
 * COMPONENT(ARTICLE, CUSTOMER ARTICLE) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPinfo5 = () => {
  const dispatch = useDispatch();
  const { infoProduct } = useSelector(selectNewProductData);

  const onChangeArticle = (e) => {
    dispatch(updateArticle(e.target.value));
  };

  const onChangeCustomerArticle = (e) => {
    dispatch(updateCustomerArticle(e.target.value));
  };

  return (
    <div className="data-two-cont">
      <input
        type="text"
        placeholder="Артикул товара(маркеты)"
        className="inp-data"
        value={infoProduct.article}
        onChange={onChangeArticle}
        required
      />
      <input
        type="text"
        placeholder="Уникальный артикул товара"
        className="inp-data"
        value={infoProduct.customerArticle}
        onChange={onChangeCustomerArticle}
        required
      />
    </div>
  );
};
