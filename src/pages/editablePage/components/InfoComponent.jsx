import { CountBlock } from "./CountBlock";
import { PriceBlock } from "./PriceBlock";

export const InfoComponent = ({ product }) => {
  if (!product) {
    return <div className="comp">Загрузка...</div>;
  }
  return (
    <div className="edit-info-container">
      <p className="offer-text">
        <span className="offer-text-span">Название товара:</span> {product.name}
      </p>
      <p className="offer-text">
        <span className="offer-text-span">Категория товара:</span>-
      </p>
      <p className="offer-text">
        <span className="offer-text-span">Бренд:</span>
        {product.brand}
      </p>
      <p className="offer-text">
        <span className="offer-text-span">Описание товара:</span>
        {product.description}
      </p>
      <div className="edit-info-cont">
        <p className="offer-text">
          <span className="offer-text-span">Артикул:</span>
          {product.article}
        </p>
        <p className="offer-text">
          <span className="offer-text-span">Уник. артикул:</span>
          {product.customerArticle}
        </p>
      </div>
      <PriceBlock
        value={product.price?.value}
        discount={product.price?.discount}
      />
      <CountBlock count={product?.count} countType={product?.countType} />
    </div>
  );
};
