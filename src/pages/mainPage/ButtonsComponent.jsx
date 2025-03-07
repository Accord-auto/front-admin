import { useNavigate } from "react-router-dom";

/**
 * BUTTONS WITH OTHER PAGES
 * @return JSX element
 */

export const ButtonsComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="main-cont-2">
      <button className="main-btns" onClick={() => navigate("/categories")}>
        Категории
      </button>
      <button
        className="main-btns"
        onClick={() => navigate("/characteristics")}
      >
        Характеристики
      </button>
      <button className="main-btns" onClick={() => navigate("/newProduct")}>
        Создать товар
      </button>
      <button className="main-btns" onClick={() => navigate("/articles")}>
        Статьи
      </button>
      <button className="main-btns" onClick={() => navigate("/branches")}>
        Филиалы
      </button>
    </div>
  );
};
