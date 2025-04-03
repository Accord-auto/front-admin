import { useDispatch, useSelector } from "react-redux";
import "./authPage.css";
import { selectAuthData } from "../../features/authFeature/authSelector";
import {
  authThunk,
  updatePassword,
  updateUsername,
} from "../../features/authFeature/authSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const { form, status } = useSelector(selectAuthData);

  useEffect(() => {
    if (status === "failed") {
      alert("Авторизация не удалась. Убедитесь в правильности данных!");
    }
  }, [status]);

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "successfully") {
    return <Navigate to="/main" />;
  }

  const handlerUsername = (e) => {
    dispatch(updateUsername(e.target.value));
  };

  const handlerPassword = (e) => {
    dispatch(updatePassword(e.target.value));
  };

  const submitAuth = (e) => {
    e.preventDefault();
    dispatch(authThunk(form));
  };

  return (
    <div className="auth-page">
      <h2 className="auth-title">Авторизация</h2>
      <form className="auth-container" onSubmit={submitAuth}>
        <input
          type="text"
          placeholder="login"
          className="auth-input"
          value={form.username}
          onChange={handlerUsername}
          required
        />
        <input
          type="password"
          placeholder="password"
          className="auth-input"
          value={form.password}
          onChange={handlerPassword}
          required
        />
        <button type="submit" className="auth-btn">
          Войти
        </button>
      </form>
    </div>
  );
};
