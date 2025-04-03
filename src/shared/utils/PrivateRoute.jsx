import { Navigate, Outlet } from "react-router-dom";
import { selectAuthData } from "../../features/authFeature/authSelector";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { isAuth } = useSelector(selectAuthData);

  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};
