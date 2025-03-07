import { useDispatch, useSelector } from "react-redux";
import newcheck from "../../../assets/images/newcheck.svg";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import { useEffect, useState } from "react";
import {
  addSocialMedia,
  delSocialMedia,
} from "../../../features/branchesFeature/branchesSlice";
import del from "../../../assets/images/delete.svg";

export const URLBlock = ({ number }) => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);
  const [newName, setNewName] = useState("");
  const name = infoBranch?.contacts[0]?.socialURLs[number];

  const handleNewSocialMedia = () => {
    if (newName.trim()) {
      dispatch(addSocialMedia(newName.trim()));
      setNewName("");
    } else {
      alert("Введите строку!");
    }
  };

  const deleteSocialMedia = () => {
    dispatch(delSocialMedia(name));
  };

  return (
    <>
      {name ? (
        <div className="br-address-cont-2">
          <p className="br-text-block">{name}</p>
          <img
            src={del}
            alt=""
            className="br-ss-img-2"
            onClick={deleteSocialMedia}
          />
        </div>
      ) : (
        <div className="br-address-cont">
          <input
            required
            type="text"
            className="br-address-inp"
            placeholder="ссылка на соцсеть(@akkord)"
            onChange={(e) => setNewName(e.target.value)}
          />
          <img
            src={newcheck}
            alt=""
            className="br-ss-img"
            onClick={handleNewSocialMedia}
          />
        </div>
      )}
    </>
  );
};
