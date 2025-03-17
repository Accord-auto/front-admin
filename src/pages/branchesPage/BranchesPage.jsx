import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../shared/components/Header";
import "./branchespage.css";
import { AllBranches } from "./components/AllBranches";
import { NewBranch } from "./components/NewBranch";
import { selectNewPBranchData } from "../../features/branchesFeature/branchesSelector";
import {
  getDepartmentsBranchesThunk,
  getHeaderBranchesThunk,
  resetAllBranch,
} from "../../features/branchesFeature/branchesSlice";
import { useEffect } from "react";

export const BranchesPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectNewPBranchData);

  useEffect(() => {
    dispatch(getHeaderBranchesThunk());
    dispatch(getDepartmentsBranchesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (status === "failed/add") {
      alert("Ошибка при создании филиала" + error);
    }
    if (status === "failed/remove") {
      alert("Ошибка при удалении филиала" + error);
    }
    if (status === "successfully/add") {
      alert("Филиал создан успешно!");
      dispatch(resetAllBranch());
      dispatch(getHeaderBranchesThunk());
      dispatch(getDepartmentsBranchesThunk());
    }
    if (status === "successfully/remove") {
      dispatch(getHeaderBranchesThunk());
      dispatch(getDepartmentsBranchesThunk());
    }
  }, [status]);

  if (status === "loading") {
    return <div className="comp">Загрузка...</div>;
  }

  if (status === "failed") {
    return <div className="comp">Ошибка: {error}</div>;
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
