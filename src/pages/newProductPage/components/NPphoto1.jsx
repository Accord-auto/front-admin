import { useState } from "react";
import plus from "../../../assets/images/plus.svg";
import { useDispatch } from "react-redux";
import { updateMainPhoto } from "../../../features/newProductFeature/newProductSlice";

/**
 * COMPONENT(MAIN PHOTO) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPphoto1 = () => {
  const [blob, setBlob] = useState(null);
  const dispatch = useDispatch();

  const onChangeImg = (image) => {
    const url = URL.createObjectURL(image);

    dispatch(updateMainPhoto(url));
    setBlob(url);
  };

  return (
    <>
      {blob ? (
        <img src={blob} className="newP-photo"></img>
      ) : (
        <label htmlFor="" className="newP-lbl">
          <img src={plus} alt="" className="article-svg" />
          <input
            required
            className="article-inp-file"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => onChangeImg(e.target.files[0])}
          />
        </label>
      )}
    </>
  );
};
