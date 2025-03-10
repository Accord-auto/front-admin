import { useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import plus from "../../../assets/images/add.svg";
import { useEffect, useState } from "react";
import { URLBlock } from "./URLBlock";

export const URLComponent = () => {
  const { infoBranch } = useSelector(selectNewPBranchData);
  const socialURLs = infoBranch.contacts[0].socialURLs || [];

  const [count, setCount] = useState(socialURLs.length);

  useEffect(() => {
    setCount(socialURLs.length);
  }, [socialURLs]);

  const handleNewBlock = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h2 className="br-title">Соц. сети</h2>

      {Array.from({ length: count }).map((_, i) => (
        <URLBlock key={i} number={i} />
      ))}
      <img src={plus} alt="" className="br-ss-img" onClick={handleNewBlock} />
    </>
  );
};
