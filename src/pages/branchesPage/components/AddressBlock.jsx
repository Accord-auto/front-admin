import { useDispatch, useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import {
  updateCity,
  updateState,
  updateStreet,
  updateZipcode,
} from "../../../features/branchesFeature/branchesSlice";

export const AddressBlock = () => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);

  const handleCity = (e) => {
    const value = e.replace(
      /^(.)(.*)$/,
      (_, first, rest) => first.toUpperCase() + rest
    );
    dispatch(updateCity(value));
  };

  const handleStreet = (e) => {
    const value = e.replace(
      /^(.)(.*)$/,
      (_, first, rest) => first.toUpperCase() + rest
    );
    dispatch(updateStreet(value));
  };

  const handleState = (e) => {
    const value = e.replace(
      /^(.)(.*)$/,
      (_, first, rest) => first.toUpperCase() + rest
    );
    dispatch(updateState(value));
  };

  const handleZipcode = (e) => {
    const value = e.replace(/\D/g, "");
    if (value.length <= 6) {
      dispatch(updateZipcode(value));
    }
  };

  return (
    <>
      <h2 className="br-title">Адрес</h2>
      <div className="br-address-container">
        <div className="br-address-cont">
          <input
            required
            type="text"
            className="br-address-inp"
            placeholder="Название города"
            value={infoBranch.address.city}
            onChange={(e) => handleCity(e.target.value)}
          />
          <input
            required
            type="text"
            className="br-address-inp"
            placeholder="Название улицы"
            value={infoBranch.address.street}
            onChange={(e) => handleStreet(e.target.value)}
          />
        </div>
        <div className="br-address-cont">
          <input
            required
            type="text"
            className="br-address-inp"
            placeholder="Номер дома"
            value={infoBranch.address.state}
            onChange={(e) => handleState(e.target.value)}
          />
          <input
            type="text"
            className="br-address-inp"
            placeholder="Почтовый индекс"
            value={infoBranch.address.zipCode}
            onChange={(e) => handleZipcode(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
