import add from "../../assets/images/add.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryThunk } from "./categoriesSlice";
import { selectCategoriesData } from "./categoriesSelector";

export const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector(selectCategoriesData);

  useEffect(() => {
    if (status === "failed/add") {
      alert("Ошибка при создании категории" + error);
    }
  }, [status]);

  const newCategory = (e) => {
    e.preventDefault();
    dispatch(addCategoryThunk(categoryName));
    setCategoryName("");
  };

  return (
    <form className="category-cont-1" onSubmit={newCategory}>
      <input
        required
        className="category-input"
        type="text"
        placeholder="Название категории"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button className="category-btn" type="submit">
        <img src={add} alt="" width="50px" />
      </button>
    </form>
  );
};
