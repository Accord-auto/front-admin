import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchValuesThunk, removeValueThunk } from "./valuesSlice";
import { ValuesForm } from "./ValuesForm";
import del from "../../assets/images/delete.svg";
import { selectValuesData } from "./valuesSelector";
import Modal from "../../shared/components/ModalWindow/ModalWindow";

export const ValuesList = ({ idCharacter }) => {
  const dispatch = useDispatch();
  const { values, status, error } = useSelector(selectValuesData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
              onClick={() => setModalIsOpen(true)}
            />
            <Modal
              isOpen={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
              func={() => deleteValue(value.id)}
            >
              <p>
                При удалении этого значения, оно также будет удалено у всех
                товаров.
                <br /> Вы хотите удалить это значение характеристики?
              </p>
            </Modal>
          </div>
        ))
      ) : (
        <p className="comp">Добавьте новые значения!</p>
      )}
    </div>
  );
};
