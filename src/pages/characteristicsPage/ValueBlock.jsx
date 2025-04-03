import { useState } from "react";
import { useDispatch } from "react-redux";
import del from "../../assets/images/delete.svg";
import { removeValueThunk } from "../../features/valuesFeature/valuesSlice";
import Modal from "../../shared/components/ModalWindow/ModalWindow";

export const ValueBlock = ({ valueInfo, idSelectedCharacteristic }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const removeValue = (id) => {
    console.log("idC: " + idSelectedCharacteristic + ", idV: " + id);
    dispatch(removeValueThunk({ idC: idSelectedCharacteristic, idV: id }));
  };

  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <div className="value-component">
      <p>{valueInfo.value}</p>
      <img
        src={del}
        alt=""
        className="character-img"
        onClick={() => setIsActive(true)}
      />
      <Modal
        isOpen={isActive}
        onClose={closeModal}
        func={() => removeValue(valueInfo.id)}
      >
        <p>
          При удалении этого значения характеристики, оно также будет удалено из
          всех товаров к которым относится!
          <br /> Вы хотите удалить значение?
        </p>
      </Modal>
    </div>
  );
};
