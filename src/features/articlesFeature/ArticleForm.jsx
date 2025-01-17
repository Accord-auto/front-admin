import { useEffect, useState } from "react";
import plus from "../../assets/images/plus.svg";
import { addArticleThunk } from "./articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectArticlesData } from "./ariclesSelector";

export const ArticleForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(selectArticlesData);
  const [blob, setBlob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  const onChangeTitle = (text) => {
    setFormData((prev) => ({
      ...prev,
      title: text,
    }));
  };

  const onChangeDescription = (text) => {
    setFormData((prev) => ({
      ...prev,
      description: text,
    }));
  };

  const onChangeImg = (image) => {
    setFormData((prev) => ({
      ...prev,
      file: image,
    }));
    setBlob(URL.createObjectURL(image));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addArticleThunk(formData));
  };

  useEffect(() => {
    if (status === "failed/add") {
      alert("Ошибка при создании статьи" + error);
    }
    if (status === "successfully/add") {
      setBlob(null);
      setFormData((prev) => ({
        ...prev,
        title: "",
        description: "",
        file: null,
      }));
    }
  }, [status]);

  return (
    <form className="article-cont" onSubmit={submitForm}>
      <div className="article-cont-3">
        {blob ? (
          <img src={blob} className="article-photo"></img>
        ) : (
          <label htmlFor="" className="article-lbl">
            <img src={plus} alt="" className="article-svg" />
            <input
              value={formData.file}
              required
              className="article-inp-file"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => onChangeImg(e.target.files[0])}
            />
          </label>
        )}
        <div className="article-cont-2">
          <input
            required
            className="article-inp-head"
            type="text"
            placeholder="Название статьи"
            onChange={(e) => onChangeTitle(e.target.value)}
            value={formData.title}
          />
          <div className="article-cont-textarea">
            <textarea
              value={formData.description}
              required
              className="article-txt-area"
              placeholder="Описание статьи"
              onChange={(e) => onChangeDescription(e.target.value)}
              maxLength={1000}
            ></textarea>
            <p className="char-count">{formData.description.length}/1000</p>
          </div>
        </div>
      </div>
      <button
        className="article-btn"
        type="submit"
        disabled={status === "loading/add"}
      >
        Добавить
      </button>
    </form>
  );
};
