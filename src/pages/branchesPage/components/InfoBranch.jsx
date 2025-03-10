import { useDispatch } from "react-redux";
import del from "../../../assets/images/delete.svg";
import { deleteBrunchThunk } from "../../../features/branchesFeature/branchesSlice";

export const InfoBranch = ({ branch }) => {
  const dispatch = useDispatch();

  const removeBranch = () => {
    dispatch(deleteBrunchThunk(branch.id));
  };

  return (
    <div className="br-info-container">
      <div className="br-address-cont">
        <p className="br-info-title">{branch.name}</p>
        <img src={del} alt="" className="br-ss-img-2" onClick={removeBranch} />
      </div>
      <p className="br-info-address">
        Адрес: {branch.address.state}, {branch.address.city},{" "}
        {branch.address.street}
      </p>
      <p className="br-info-address">
        Почтовый индекс: {branch.address.zipCode ? branch.address.zipCode : "-"}
      </p>
      <p className="br-info-address">
        Номер телефона: {branch.contacts[0].phoneNumber}
      </p>
      <p className="br-info-address">
        Email: {branch.contacts[0].email ? branch.contacts[0].email : "-"}
      </p>
      <p className="br-info-address">
        Соц.сети:
        {branch.contacts[0].socialURLs.map((elem) => (
          <p key={elem.url}>
            {elem.type}: {elem.url};
          </p>
        ))}
      </p>
    </div>
  );
};
