import { useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import { InfoBranch } from "./InfoBranch";

export const AllBranches = () => {
  const { departmentsBranches } = useSelector(selectNewPBranchData);

  return (
    <div className="br-container-all">
      <h1 className="title-page">Ваши филиалы</h1>
      <h2 className="branches-title">Основные</h2>
      {departmentsBranches?.map((element) => (
        <InfoBranch key={element.id} branch={element} />
      ))}
      <h2 className="branches-title">Дополнительные</h2>
      {departmentsBranches?.map((element) => (
        <InfoBranch key={element.id} branch={element} />
      ))}
    </div>
  );
};
