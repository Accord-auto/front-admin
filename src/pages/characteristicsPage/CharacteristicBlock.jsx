import { useDispatch } from "react-redux";
import del from "../../assets/images/delete.svg";
import right from "../../assets/images/right.svg";
import { removeCharacteristicThunk } from "../../features/characteristicFeature/characteristicsSlice";
import Modal from "../../shared/components/ModalWindow/ModalWindow";
import { useState } from "react";

export const CharacteristicBlock = ({
  changeFunc,
  characteristicInfo,
  selectedId,
}) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const removeCharacter = (id) => {
    dispatch(removeCharacteristicThunk(id));
  };

  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`character-cont ${
        selectedId === characteristicInfo.id ? "character-active" : ""
      }`}
    >
      <p className="character-text">{characteristicInfo.name}</p>
      <div className="character-cont-2">
        <img
          src={del}
          alt=""
          className="character-img"
          onClick={() => setIsActive(true)}
        />
        <img
          src={right}
          alt=""
          className="character-img"
          onClick={() => changeFunc(characteristicInfo.id)}
        />
      </div>
      <Modal
        isOpen={isActive}
        onClose={closeModal}
        func={() => removeCharacter(characteristicInfo.id)}
      >
        <p>
          При удалении характеристики будут удалены также все ее значения. И она
          пропадет из товаров у которых указана на данный момент!
          <br /> Вы хотите удалить характеристику?
        </p>
      </Modal>
    </div>
  );
};
