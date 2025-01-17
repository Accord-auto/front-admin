import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import add from "../../assets/images/add.svg";
import { addValueThunk } from "./valuesSlice";
import { selectValuesData } from "./valuesSelector";

export const ValuesForm = ({ idCharacter }) => {
  const [valueName, setValueName] = useState("");
  const dispatch = useDispatch();
  const { status } = useSelector(selectValuesData);

  useEffect(() => {
    if (status === "failed/add") {
      alert("Ошибка при создании характеристики" + error);
    }
  }, [status]);

  const newValue = (e) => {
    e.preventDefault();
    dispatch(addValueThunk({ id: idCharacter, name: valueName }));
    setValueName("");
  };

  return (
    <form className="category-cont-1" onSubmit={newValue}>
      <input
        required
        className="category-input"
        type="text"
        placeholder="Значение"
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
      />
      <button className="category-btn" type="submit">
        <img src={add} alt="" width="40px" />
      </button>
    </form>
  );
};
