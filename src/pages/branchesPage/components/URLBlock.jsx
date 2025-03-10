import { useDispatch, useSelector } from "react-redux";
import newcheck from "../../../assets/images/newcheck.svg";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import { useState } from "react";
import {
  addSocialMedia,
  delSocialMedia,
} from "../../../features/branchesFeature/branchesSlice";
import del from "../../../assets/images/delete.svg";

export const URLBlock = ({ number }) => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);
  const name = infoBranch?.contacts[0]?.socialURLs[number];

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleNewSocialMedia = () => {
    if (newName.trim() && newMessage.trim()) {
      const data = {
        type: newMessage,
        url: newName,
      };
      dispatch(addSocialMedia(data));
      setNewName("");
      setNewMessage("");
    } else {
      alert("Заполните название мессенджера и тег!");
    }
  };

  const deleteSocialMedia = () => {
    const data = {
      type: name.type,
      url: name.url,
    };
    dispatch(delSocialMedia(data));
  };

  return (
    <>
      {name ? (
        <div className="br-address-cont-2">
          <p className="br-text-block">{name.type}</p>
          <p className="br-text-block">{name.url}</p>

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
            placeholder="Telegram/WhatsApp"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input
            required
            type="text"
            className="br-address-inp"
            placeholder="@akkord/8(800)555-35-35"
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
