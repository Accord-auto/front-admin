import { useDispatch, useSelector } from "react-redux";
import { getProductArticleThunk } from "../../features/getProductArticle/getProductArticleSlice";
import { selectProductGetArticleData } from "../../features/getProductArticle/getProductArticleSelector";
import search from "../../assets/images/search.svg";

export const ComponentArticle = ({ setstate }) => {
  const { product, status, error } = useSelector(selectProductGetArticleData);
  const dispatch = useDispatch();

  const getProductByArticle = () => {
    const getName = prompt("Введите артикул: ");
    dispatch(getProductArticleThunk(getName));
  };

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }

  if (status === "successfully") {
    setstate(product);
  }
  return (
    <div className="main-cont-1">
      <h1 className="title-page">Ваши товары</h1>
      <img
        src={search}
        alt=""
        width="40px"
        height="auto"
        className="main-img-1"
        onClick={getProductByArticle}
      />
    </div>
  );
};
