import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCharacteristicsThunk } from "./characteristicsSlice";
import { ValuesList } from "../valuesFeature/ValuesList";
import { selectCharacteristicsData } from "./characteristicsSelector";
import Modal from "../../shared/components/ModalWindow/ModalWindow";
import { CharacteristicBlock } from "../../pages/characteristicsPage/CharacteristicBlock";

export const CharacteristicsList = () => {
  const [idCheck, setIdCheck] = useState(null);
  const dispatch = useDispatch();
  const { characteristics, status, error } = useSelector(
    selectCharacteristicsData
  );

  useEffect(() => {
    dispatch(fetchCharacteristicsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (status === "successfully/remove" || status == "successfully/add") {
      dispatch(fetchCharacteristicsThunk());
    }
  }, [status]);

  const handlerCharacter = (id) => {
    setIdCheck(id);
  };

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
  }

  if (characteristics.length === 0) {
    return <div className="comp">Создайте характеристику</div>;
  }

  return (
    <div className="character-value-cont">
      <div className="character-main-cont">
        {characteristics.map((character) => (
          <CharacteristicBlock
            changeFunc={handlerCharacter}
            characteristicInfo={character}
            selectedId={idCheck}
            key={character.id}
          />
        ))}
      </div>
      {idCheck ? (
        <ValuesList idCharacter={idCheck} />
      ) : (
        <p className="comp">Выберите характеристику</p>
      )}
    </div>
  );
};
