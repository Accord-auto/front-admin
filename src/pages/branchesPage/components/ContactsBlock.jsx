import { useDispatch, useSelector } from "react-redux";
import { selectNewPBranchData } from "../../../features/branchesFeature/branchesSelector";
import {
  updateMail,
  updatePhone,
} from "../../../features/branchesFeature/branchesSlice";

export const ContactsBlock = () => {
  const dispatch = useDispatch();
  const { infoBranch } = useSelector(selectNewPBranchData);

  const handlePhone = (e) => {
    let digits = e.replace(/\D/g, "").replace(/^8/, "7");

    if (!digits.startsWith("7")) digits = "7" + digits;
    digits = digits.slice(0, 11);

    let formattedPhone = digits.replace(
      /(\d{1})(\d{3})?(\d{3})?(\d{2})?(\d{2})?/,
      (_, p1, p2, p3, p4, p5) =>
        `+${p1}${p2 ? ` ${p2}` : ""}${p3 ? ` ${p3}` : ""}${p4 ? `-${p4}` : ""}${
          p5 ? `-${p5}` : ""
        }`
    );

    dispatch(updatePhone(formattedPhone));
  };

  const handleEmail = (e) => {
    const value = e.trim();
    dispatch(updateMail(value));
  };

  return (
    <>
      <h2 className="br-title">Контакты</h2>
      <div className="br-address-cont">
        <input
          required
          type="text"
          className="br-address-inp"
          placeholder="Номер телефона"
          value={infoBranch.contacts[0].phoneNumber}
          onChange={(e) => handlePhone(e.target.value)}
        />
        <input
          type="text"
          className="br-address-inp"
          placeholder="ivanov@mail.com"
          value={infoBranch.contacts[0].email}
          onChange={(e) => handleEmail(e.target.value)}
        />
      </div>
    </>
  );
};
