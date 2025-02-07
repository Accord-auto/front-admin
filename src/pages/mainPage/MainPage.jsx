import warning from "../../assets/images/warning.svg";
import { ButtonsComponent } from "./ButtonsComponent";
import { ListProducts } from "./ListProducts";
import "./mainpage.css";

/**
 * MAIN ADMIN PAGE
 * @return JSX element
 */

export const MainPage = () => {
  return (
    <>
      <div className="main-cont-1">
        <h1 className="title-page">Панель администратора</h1>
        <img
          src={warning}
          alt=""
          width="40px"
          height="auto"
          className="main-img-1"
        />
      </div>
      <ButtonsComponent />
      <hr />
      <ListProducts />
    </>
  );
};
