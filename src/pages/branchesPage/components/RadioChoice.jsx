import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import { updateType } from "../../../features/branchesFeature/branchesSlice";

export const RadioChoice = () => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);

  const handleCheckRadio = (type) => {
    dispatch(updateType(type));
  };

  return (
    <div className="br-radio-container">
      <label htmlFor="header" className="br-radio-cont">
        <input
          type="radio"
          id="HEADER"
          name="type"
          onChange={() => handleCheckRadio("HEADER")}
          checked={infoBranch.typeCompany === "HEADER"}
        />
        основной
      </label>
      <label htmlFor="department" className="br-radio-cont">
        <input
          type="radio"
          id="DEPARTMENT"
          name="type"
          onChange={() => handleCheckRadio("DEPARTMENT")}
          checked={infoBranch.typeCompany === "DEPARTMENT"}
        />
        дополнительный
      </label>
    </div>
  );
};
