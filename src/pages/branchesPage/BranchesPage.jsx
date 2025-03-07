import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../shared/components/Header";
import "./branchespage.css";
import { AllBranches } from "./components/AllBranches";
import { NewBranch } from "./components/NewBranch";
import { selectNewPBranchData } from "../../features/branchesFeature/branchesSelector";
import { resetAllBranch } from "../../features/branchesFeature/branchesSlice";
import { useEffect } from "react";

export const BranchesPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectNewPBranchData);

  useEffect(() => {
    if (status === "failed/add") {
      alert("Ошибка при создании филиала" + error);
    }
    if (status === "successfully/add") {
      dispatch(resetAllBranch());
      alert("Филиал создан успешно!");
    }
  }, [status]);

  if (status === "loading") {
    return <div className="comp">Создаем филиал...</div>;
  }

  return (
    <>
      <Header />
      <div className="br-main-container">
        <AllBranches />
        <NewBranch />
      </div>
    </>
  );
};
