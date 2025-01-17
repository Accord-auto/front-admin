import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchValuesThunk, removeValueThunk } from "./valuesSlice";
import { ValuesForm } from "./ValuesForm";
import del from "../../assets/images/delete.svg";
import { selectValuesData } from "./valuesSelector";

export const ValuesList = ({ idCharacter }) => {
  const dispatch = useDispatch();
  const { values, status, error } = useSelector(selectValuesData);

  useEffect(() => {
    dispatch(fetchValuesThunk(idCharacter));
  }, [idCharacter]);

  useEffect(() => {
    if (status === "successfully/remove" || status == "successfully/add") {
      dispatch(fetchValuesThunk(idCharacter));
    }
  }, [status]);

  const deleteValue = (idValue) => {
    dispatch(removeValueThunk({ idC: idCharacter, idV: idValue }));
  };

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }

  return (
    <div className="values-cont">
      <ValuesForm idCharacter={idCharacter} />
      {values.length > 0 ? (
        values.map((value) => (
          <div key={value.id} className="value-component">
            <p>{value.value}</p>
            <img
              src={del}
              alt=""
              className="character-img"
              onClick={() => deleteValue(value.id)}
            />
          </div>
        ))
      ) : (
        <p className="comp">Добавьте новые значения!</p>
      )}
    </div>
  );
};
