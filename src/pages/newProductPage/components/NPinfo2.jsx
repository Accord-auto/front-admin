import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCategoriesThunk } from "../../../features/categoriesFeature/categoriesSlice";
import { DropdownList } from "../../../shared/components/DropdownList";
import {
  updateCategory,
  updateSpecialOffer,
} from "../../../features/newProductFeature/newProductSlice";
import { selectCategoriesData } from "../../../features/categoriesFeature/categoriesSelector";
import { selectNewProductData } from "../../../features/newProductFeature/newProductSelectors";

/**
 * COMPONENT(CATEGORY, SPECIAL OFFERS) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPinfo2 = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(selectCategoriesData);
  const { infoProduct } = useSelector(selectNewProductData);
  const [categoryName, setCategoryName] = useState("Выберите категорию");

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const onChangeCategory = (element) => {
    dispatch(updateCategory(element.id));
    setCategoryName(element.name);
  };

  const onChangeSpecOffer = (e) => {
    dispatch(updateSpecialOffer(e.target.checked));
  };

  return (
    <div className="data-two-cont">
      <DropdownList
        list={categories}
        content={categoryName}
        func={onChangeCategory}
      />
      <div className="data-cont-check">
        <input
          type="checkbox"
          placeholder="ff"
          className="data-check"
          defaultChecked={infoProduct.specialOffer}
          onChange={onChangeSpecOffer}
        />
        <label>Спец. предложение</label>
      </div>
    </div>
  );
};
