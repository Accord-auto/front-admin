import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacteristicsThunk } from "../../../features/characteristicFeature/characteristicsSlice";
import { DropdownList } from "../../../shared/components/DropdownList";
import { DropdownListValues } from "../../../shared/components/DropdownListValues";
import del from "../../../assets/images/delete.svg";
import { selectCharacteristicsData } from "../../../features/characteristicFeature/characteristicsSelector";

/**
 * COMPONENT(CHOICE CHARACTERISTIC) FOR NEW PRODUCT
 * @param props.onDelete [function]
 * @param props.idUniq [number]
 * @return JSX element
 */

export const NPinfo7 = ({ onDelete, idUniq }) => {
  const dispatch = useDispatch();
  const { characteristics } = useSelector(selectCharacteristicsData);
  const [propertyName, setPropertyName] = useState("Характеристика");
  const [data, setData] = useState({
    idProperty: null,
    show: false,
    disOnclick: false,
  });

  useEffect(() => {
    dispatch(fetchCharacteristicsThunk());
  }, [dispatch]);

  const onChangeCharacteristic = (element) => {
    setPropertyName(element.name);

    setData({
      idProperty: element.id,
      show: true,
      disOnclick: true,
    });
  };

  const handleDelete = () => {
    console.log(data.idProperty);
    onDelete(data.idProperty, idUniq);
  };

  return (
    <div className="data-two-cont">
      <DropdownList
        list={characteristics}
        content={propertyName}
        func={onChangeCharacteristic}
        dis={data.disOnclick}
      />
      {data.show ? <DropdownListValues idProperty={data.idProperty} /> : <></>}
      <img src={del} className="data-svg" onClick={handleDelete} />
    </div>
  );
};
