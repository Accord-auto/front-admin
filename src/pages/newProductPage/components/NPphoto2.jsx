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

  return (
    <div className="newP-cont-photos">
      {formPhoto.fileOne ? (
        <img src={formPhoto.fileOne} className="newP-photo-more"></img>
      ) : (
        <label htmlFor="" className="newP-lbl-2">
          <img src={plus} alt="" className="article-svg" />
          <input
            className="article-inp-file"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => onChangeImg(e.target.files[0], "fileOne")}
          />
        </label>
      )}

      {formPhoto.fileTwo ? (
        <img src={formPhoto.fileTwo} className="newP-photo-more"></img>
      ) : (
        <label htmlFor="" className="newP-lbl-2">
          <img src={plus} alt="" className="article-svg" />
          <input
            className="article-inp-file"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => onChangeImg(e.target.files[0], "fileTwo")}
          />
        </label>
      )}
      {formPhoto.fileThree ? (
        <img src={formPhoto.fileThree} className="newP-photo-more"></img>
      ) : (
        <label htmlFor="" className="newP-lbl-2">
          <img src={plus} alt="" className="article-svg" />
          <input
            className="article-inp-file"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => onChangeImg(e.target.files[0], "fileThree")}
          />
        </label>
      )}
    </div>
  );
};
