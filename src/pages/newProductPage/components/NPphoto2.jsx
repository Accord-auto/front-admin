import { useState } from "react";
import plus from "../../../assets/images/plus.svg";
import { useDispatch } from "react-redux";
import { updateMorePhotos } from "../../../features/newProductFeature/newProductSlice";

/**
 * COMPONENT(ADDITIONAL PHOTOS) FOR NEW PRODUCT
 * @return JSX element
 */

export const NPphoto2 = () => {
  const dispatch = useDispatch();
  const [formPhoto, setFormPhoto] = useState({
    fileOne: null,
    fileTwo: null,
    fileThree: null,
  });

  const onChangeImg = (image, key) => {
    dispatch(updateMorePhotos(URL.createObjectURL(image)));

    setFormPhoto((prev) => ({
      ...prev,
      [key]: URL.createObjectURL(image),
    }));
  };

  const handleUrlChange = (e, key) => {
    const url = e.target.value;
    if (url) {
      dispatch(updateMorePhotos(url));
      setFormPhoto((prev) => ({
        ...prev,
        [key]: url,
      }));
    }
  };

  return (
    <div className="newP-cont-photos">
      {formPhoto.fileOne ? (
        <img src={formPhoto.fileOne} className="newP-photo-more"></img>
      ) : (
        <label htmlFor="" className="newP-lbl-2">
          <div className="newP-url-cont">
            <img src={plus} alt="" className="newP-url-cont-svg" />
            <input
              type="text"
              placeholder="URL image"
              className="inp-data url-input"
              onBlur={(e) => handleUrlChange(e, "fileOne")}
            />
          </div>
          <input
            required
            className="article-inp-file"
            type="file"
            accept="image/*"
            onChange={(e) => onChangeImg(e.target.files[0], "fileOne")}
          />
        </label>
      )}

      {formPhoto.fileTwo ? (
        <img src={formPhoto.fileTwo} className="newP-photo-more"></img>
      ) : (
        <label htmlFor="" className="newP-lbl-2">
          <div className="newP-url-cont">
            <img src={plus} alt="" className="newP-url-cont-svg" />
            <input
              type="text"
              placeholder="URL image"
              className="inp-data url-input"
              onBlur={(e) => handleUrlChange(e, "fileTwo")}
            />
          </div>
          <input
            className="article-inp-file"
            type="file"
            accept="image/*"
            onChange={(e) => onChangeImg(e.target.files[0], "fileTwo")}
          />
        </label>
      )}
      {formPhoto.fileThree ? (
        <img src={formPhoto.fileThree} className="newP-photo-more"></img>
      ) : (
        <label htmlFor="" className="newP-lbl-2">
          <div className="newP-url-cont">
            <img src={plus} alt="" className="newP-url-cont-svg" />
            <input
              type="text"
              placeholder="URL image"
              className="inp-data url-input"
              onBlur={(e) => handleUrlChange(e, "fileThree")}
            />
          </div>
          <input
            className="article-inp-file"
            type="file"
            accept="image/*"
            onChange={(e) => onChangeImg(e.target.files[0], "fileThree")}
          />
        </label>
      )}
    </div>
  );
};
