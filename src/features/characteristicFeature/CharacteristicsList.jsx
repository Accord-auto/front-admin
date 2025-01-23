import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchCharacteristicsThunk,
  removeCharacteristicThunk,
} from "./characteristicsSlice";
import right from "../../assets/images/right.svg";
import del from "../../assets/images/delete.svg";
import { ValuesList } from "../valuesFeature/ValuesList";
import { selectCharacteristicsData } from "./characteristicsSelector";
import Modal from "../../shared/components/ModalWindow/ModalWindow";

export const CharacteristicsList = () => {
  const [isActive, setIsActive] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const removeCharacter = (id) => {
    if (isActive === id) {
      setIsActive(null);
    }
    dispatch(removeCharacteristicThunk(id));
  };

  const handlerCharacter = (id) => {
    setIsActive(id);
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
          <div
            className={`character-cont ${
              isActive === character.id ? "character-active" : ""
            }`}
            key={character.id}
          >
            <p className="character-text">{character.name}</p>
            <div className="character-cont-2">
              <img
                src={del}
                alt=""
                className="character-img"
                onClick={() => setModalIsOpen(true)}
              />
              <img
                src={right}
                alt=""
                className="character-img"
                onClick={() => handlerCharacter(character.id)}
              />
              <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                func={() => removeCharacter(character.id)}
              >
                <p>
                  При удалении характеристики она будет удалена из всех товаров
                  к которым относится.
                  <br /> Вы хотите удалить характеристику?
                </p>
              </Modal>
            </div>
          </div>
        ))}
      </div>
      {isActive ? (
        <ValuesList idCharacter={isActive} />
      ) : (
        <p className="comp">Выберите характеристику</p>
      )}
    </div>
  );
};
