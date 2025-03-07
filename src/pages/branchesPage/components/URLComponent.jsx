import { useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import plus from "../../../assets/images/add.svg";
import { useEffect, useState } from "react";
import { URLBlock } from "./URLBlock";

export const URLComponent = () => {
  const { infoBranch } = useSelector(selectNewPBranchData);
  const [arrSocialMedia, setArrSocialMedia] = useState([]);

  useEffect(() => {
    if (infoBranch?.contacts[0]?.socialURLs) {
      setArrSocialMedia(infoBranch.contacts[0].socialURLs);
    }
  }, [infoBranch?.contacts[0]?.socialURLs]);

  const handleNewBlock = () => {
    setArrSocialMedia((prev) => [...prev, ""]);
  };

  return (
    <>
      <h2 className="br-title">Соц. сети</h2>

      {arrSocialMedia.map((_, i) => (
        <URLBlock key={i} number={i} />
      ))}
      <img src={plus} alt="" className="br-ss-img" onClick={handleNewBlock} />
    </>
  );
};
