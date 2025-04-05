import { Navigate, Outlet } from "react-router-dom";
import { selectAuthData } from "../../features/authFeature/authSelector";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { isAuth, status } = useSelector(selectAuthData);
  const token = localStorage.getItem("token");

  if (status === "loading" && token) {
    return <div className="comp">Загрузка...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
