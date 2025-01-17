import exit from "../../assets/images/exit.svg";
import { useNavigate } from "react-router-dom";

/**
 * HEADER
 * @return JSX element
 */

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => navigate(-1)}
        src={exit}
        alt=""
        className="header-img"
      />
      <hr />
    </>
  );
};
