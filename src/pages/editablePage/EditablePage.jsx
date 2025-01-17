import "./editablepage.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEditableProductData } from "../../features/editableProductFeature/editableProductSelector";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductThunk } from "../../features/editableProductFeature/editableProductSlice";
import { PhotosComponent } from "./components/PhotosComponent";
import { InfoComponent } from "./components/InfoComponent";
import { Header } from "../../shared/components/Header";

export const EditablePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status, error } = useSelector(selectEditableProductData);

  useEffect(() => {
    dispatch(getProductThunk(id));
  }, [dispatch]);

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }
  return (
    <>
      <Header />
      <div className="edit-main-container">
        <PhotosComponent product={product} />
        <InfoComponent product={product} />
      </div>
    </>
  );
};
