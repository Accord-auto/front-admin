import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";
import { CategoriesPage } from "./pages/categoriesPage/CategoriesPage";
import { ArticlesPage } from "./pages/articlesPage/ArticlesPage";
import { CharacteristicsPage } from "./pages/characteristicsPage/CharacteristicsPage";
import { NewProductPage } from "./pages/newProductPage/NewProductPage";
import { EditablePage } from "./pages/editablePage/EditablePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/categories" element={<CategoriesPage />}></Route>
        <Route
          path="/characteristics"
          element={<CharacteristicsPage />}
        ></Route>
        <Route path="/articles" element={<ArticlesPage />}></Route>
        <Route path="/newProduct" element={<NewProductPage />}></Route>
        <Route path="/changeProduct/:id" element={<EditablePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
