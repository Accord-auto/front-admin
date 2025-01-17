import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addValueThunk,
  fetchValuesThunk,
} from "../../features/valuesFeature/valuesSlice";
import { useEffect, useState } from "react";
import { addProperty } from "../../features/newProductFeature/newProductSlice";
import { selectValuesData } from "../../features/valuesFeature/valuesSelector";

/**
 * DROPDOWN LIST WITH VALUES OF PROPERTIES
 * @param props.idProperty [number]
 * @return JSX element
 */

export const DropdownListValues = ({ idProperty }) => {
  const dispatch = useDispatch();
  const { values, status } = useSelector(selectValuesData);
  const [valuesList, setValuesList] = useState([]);
  const [name, setName] = useState("Значения");
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    dispatch(fetchValuesThunk(idProperty));
  }, [idProperty]);

  useEffect(() => {
    if (status == "successfully/add") {
      dispatch(fetchValuesThunk(idProperty));
    }
  }, [status]);

  const handlerValue = () => {
    const nameValue = prompt(
      "Напишите новое значение для выбранной характеристики"
    );
    dispatch(addValueThunk({ id: idProperty, name: nameValue }));
  };

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  const handleCheck = (element, check) => {
    if (disable) {
      return;
    } else {
      setValuesList((prevState) => {
        if (check) {
          return [...prevState, element.value];
        } else {
          return prevState.filter((item) => item !== element.value);
        }
      });
    }
  };

  const addProperties = () => {
    if (valuesList.length > 0) {
      const items = valuesList.map((valueelem) => ({
        propertyId: idProperty,
        value: valueelem,
      }));
      dispatch(addProperty(items));
      setDisable(true);
      setName("Сохранено!");
    } else {
      alert("Выберите хотя бы одно значение!");
    }
  };

  return (
    <Dropdown
      dismissOnClick={false}
      label=""
      renderTrigger={() => (
        <span className="data-dropdown">{name} &#8595;</span>
      )}
    >
      <div className="data-list">
        {values.length > 0 ? (
          <>
            {values.map((element) => (
              <Dropdown.Item key={element.id} className="data-list-item-value">
                {element.value}
                <input
                  type="checkbox"
                  className="data-check"
                  onChange={(e) => handleCheck(element, e.target.checked)}
                  checked={valuesList.includes(element.value)}
                />
              </Dropdown.Item>
            ))}
            <button
              className="data-list-item-value data-new"
              onClick={handlerValue}
              disabled={disable}
            >
              Добавить значение
            </button>
            <button
              className="data-list-item-value data-save"
              onClick={addProperties}
              disabled={disable}
            >
              Сохранить
            </button>
          </>
        ) : (
          <Dropdown.Item
            className="data-list-item-value data-new"
            onClick={handlerValue}
          >
            Добавить значение
          </Dropdown.Item>
        )}
      </div>
    </Dropdown>
  );
};
