import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchValuesThunk } from "./valuesSlice";
import { ValuesForm } from "./ValuesForm";
import { selectValuesData } from "./valuesSelector";
import { ValueBlock } from "../../pages/characteristicsPage/ValueBlock";

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
          <ValueBlock
            valueInfo={value}
            idSelectedCharacteristic={idCharacter}
            key={value.id}
          />
        ))
      ) : (
        <p className="comp">Добавьте новые значения!</p>
      )}
    </div>
  );
};
