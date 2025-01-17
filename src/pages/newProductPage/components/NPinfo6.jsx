import { NPinfo7 } from "./NPinfo7";
import { useState } from "react";
import plus from "../../../assets/images/add.svg";
import { useDispatch } from "react-redux";
import { removeProperty } from "../../../features/newProductFeature/newProductSlice";

/**
 * COMPONENT WITH CHARACTERISTICS FOR NEW PRODUCT
 * @return JSX element
 */

export const NPinfo6 = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const handlerNewComponent = () => {
    setList((prevState) => [...prevState, { id: Date.now() }]);
  };

  const deleteComponent = (idCharacter, id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));

    dispatch(removeProperty(idCharacter));
  };

  return (
    <>
      <p className="data-text">Характеристики</p>
      {list.map((element) => (
        <NPinfo7
          key={element.id}
          onDelete={deleteComponent}
          idUniq={element.id}
        />
      ))}
      <img
        src={plus}
        alt=""
        className="data-svg"
        onClick={handlerNewComponent}
      />
    </>
  );
};
