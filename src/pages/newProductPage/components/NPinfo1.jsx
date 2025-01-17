import { useDispatch, useSelector } from "react-redux";
import {
  updateName,
  updateBrand,
  updateDescription,
} from "../../../features/newProductFeature/newProductSlice";
import { selectNewProductData } from "../../../features/newProductFeature/newProductSelectors";

/**
 * COMPONENT(NAME, BRAND, DESCRIPTION) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPinfo1 = () => {
  const dispatch = useDispatch();
  const { infoProduct } = useSelector(selectNewProductData);

  const handlerNameChage = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handlerBrandChage = (e) => {
    dispatch(updateBrand(e.target.value));
  };

  const handlerDescriptionChage = (e) => {
    dispatch(updateDescription(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Название товара"
        className="inp-data"
        onChange={handlerNameChage}
        value={infoProduct.name}
        required
      />
      <input
        type="text"
        placeholder="Бренд"
        className="inp-data"
        value={infoProduct.brand}
        onChange={handlerBrandChage}
        required
      />
      <div className="article-cont-textarea">
        <textarea
          value={infoProduct.description}
          required
          className="inp-data txt-area-data"
          placeholder="Описание товара"
          onChange={handlerDescriptionChage}
          maxLength={1000}
        ></textarea>
        <p className="char-count">{infoProduct.description.length}/1000</p>
      </div>
    </>
  );
};
