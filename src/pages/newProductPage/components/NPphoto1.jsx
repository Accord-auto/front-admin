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

  const handlePaste = (e) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        onChangeImg(file);
      }
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    if (url) {
      dispatch(updateMainPhoto(url));
      setBlob(url);
    }
  };

  return (
    <>
      {blob ? (
        <img src={blob} className="newP-photo"></img>
      ) : (
        <label htmlFor="" className="newP-lbl" onPaste={handlePaste}>
          <div className="newP-url-cont">
            <img src={plus} alt="" className="newP-url-cont-svg" />
            <input
              type="text"
              placeholder="URL image"
              className="inp-data url-input"
              onBlur={handleUrlChange}
            />
          </div>
          <input
            required
            className="article-inp-file"
            type="file"
            accept="image/*"
            onChange={(e) => onChangeImg(e.target.files[0])}
          />
        </label>
      )}
    </>
  );
};
