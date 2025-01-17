import "./newProductPage.css";
import { DataProduct } from "../../features/newProductFeature/DataProduct";
import { PhotosProduct } from "../../features/newProductFeature/PhotosProduct";
import { Header } from "../../shared/components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductThunk,
  resetAllInfo,
  resetMainPhoto,
  resetMorePhotos,
} from "../../features/newProductFeature/newProductSlice";
import { selectNewProductData } from "../../features/newProductFeature/newProductSelectors";
import { useEffect } from "react";

/**
 * CREATE NEW PRODUCT PAGE
 * @return JSX element
 */

export const NewProductPage = () => {
  const dispatch = useDispatch();
  const { infoProduct, mainPhoto, morePhotos, status, error } =
    useSelector(selectNewProductData);

  useEffect(() => {
    if (status === "failed/add") {
      dispatch(resetMainPhoto());
      dispatch(resetMorePhotos());
      alert("Ошибка при создании товара" + error);
    }
    if (status === "successfully/add") {
      dispatch(resetAllInfo());
      alert("Товар создан успешно!");
    }
  }, [status]);

  const addProduct = (e) => {
    e.preventDefault();
    console.log(mainPhoto);
    console.log(morePhotos);
    if (infoProduct.countType !== "") {
      dispatch(
        addProductThunk({
          info: { ...infoProduct },
          photos: { mainPhoto, morePhotos },
        })
      );
    } else {
      alert("Не все поля выбраны или заполнены!");
    }
  };

  if (status === "loading") {
    return <div className="comp">Создаем товар...</div>;
  }
  return (
    <>
      <Header />
      <h1 className="title-page">Новый товар</h1>
      <form className="newP-container" onSubmit={(e) => addProduct(e)}>
        <PhotosProduct />
        <DataProduct />
      </form>
    </>
  );
};

// just read !!!
// HOC
