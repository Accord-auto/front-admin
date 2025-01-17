import add from "../../assets/images/add.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacteristicThunk } from "./characteristicsSlice";
import { selectCharacteristicsData } from "./characteristicsSelector";

export const CharacteristicForm = () => {
  const [characteristicName, setCharacteristicName] = useState("");
  const dispatch = useDispatch();
  const { status } = useSelector(selectCharacteristicsData);

  useEffect(() => {
    if (status === "failed/add") {
      alert("Ошибка при создании характеристики" + error);
    }
  }, [status]);

  const newCharacteristic = (e) => {
    e.preventDefault();
    dispatch(addCharacteristicThunk(characteristicName));
    setCharacteristicName("");
  };

  return (
    <form className="characteristic-cont-1" onSubmit={newCharacteristic}>
      <input
        required
        className="characteristic-input"
        type="text"
        placeholder="Название характеристики"
        value={characteristicName}
        onChange={(e) => setCharacteristicName(e.target.value)}
      />
      <button
        className="characteristic-btn"
        type="submit"
        disabled={status === "loading/add"}
      >
        <img src={add} alt="" width="50px" />
      </button>
    </form>
  );
};
