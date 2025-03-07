import { useDispatch, useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import { updateName } from "../../../features/branchesFeature/branchesSlice";

export const NamingBlock = () => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);

  const handleName = (e) => {
    dispatch(updateName(e));
  };

  return (
    <>
      <h2 className="br-title">Название</h2>
      <div className="br-address-container">
        <input
          required
          type="text"
          className="br-address-inp"
          placeholder="Название филиала"
          value={infoBranch.name}
          onChange={(e) => handleName(e.target.value)}
        />
      </div>
    </>
  );
};
