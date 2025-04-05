import warning from "../../assets/images/warning.svg";
import exit from "../../assets/images/exit.svg";
import { ButtonsComponent } from "./ButtonsComponent";
import { ListProducts } from "./ListProducts";
import "./mainpage.css";
import { useDispatch } from "react-redux";
import { logoutAuthThunk } from "../../features/authFeature/authSlice";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { ModalInfo } from "../../shared/components/ModalInfo/ModalInfo";
import { info } from "../../shared/utils/info";

/**
 * MAIN ADMIN PAGE
 * @return JSX element
 */

export const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(logoutAuthThunk()).unwrap();
      navigate("/login");
    } catch (error) {
      navigate("/login"); // Все равно перенаправляем при ошибке
    }
  }, [dispatch, navigate]);

  return (
    <>
      <button className="btn-exit" onClick={handleLogout}>
        <img src={exit} alt="" className="btn-exit-svg" />
        Выход
      </button>
      <hr />
      <div className="main-cont-1">
        <h1 className="title-page">Панель администратора</h1>
        <img
          src={warning}
          alt=""
          width="40px"
          height="auto"
          className="main-img-1"
          onClick={() => setOpen(true)}
        />
        <ModalInfo
          isOpen={open}
          onClose={() => setOpen(false)}
          children={info}
        />
      </div>
      <ButtonsComponent />
      <hr />
      <ListProducts />
    </>
  );
};
