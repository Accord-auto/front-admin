import { useDispatch, useSelector } from "react-redux";
import { AddressBlock } from "./AddressBlock";
import { ContactsBlock } from "./ContactsBlock";
import { RadioChoice } from "./RadioChoice";
import { URLComponent } from "./UrlComponent";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import { addBrunchThunk } from "../../../features/branchesFeature/branchesSlice";
import { NamingBlock } from "./NamingBlock";

export const NewBranch = () => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);

  const addBranch = () => {
    dispatch(addBrunchThunk(infoBranch));
  };

  return (
    <form className="br-container-new" onSubmit={addBranch}>
      <h1 className="title-page">Новый филиал</h1>
      <RadioChoice />
      <NamingBlock />
      <AddressBlock />
      <ContactsBlock />
      <URLComponent />
      <button type="submit" className="br-btn">
        Создать
      </button>
    </form>
  );
};
