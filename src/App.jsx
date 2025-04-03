import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";
import { CategoriesPage } from "./pages/categoriesPage/CategoriesPage";
import { ArticlesPage } from "./pages/articlesPage/ArticlesPage";
import { CharacteristicsPage } from "./pages/characteristicsPage/CharacteristicsPage";
import { NewProductPage } from "./pages/newProductPage/NewProductPage";
import { EditablePage } from "./pages/editablePage/EditablePage";
import { BranchesPage } from "./pages/branchesPage/BranchesPage";
import { AuthPage } from "./pages/authPage/AuthPage";
import { PrivateRoute } from "./shared/utils/PrivateRoute";

function App() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/login" element={<AuthPage />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/categories" element={<CategoriesPage />}></Route>
          <Route
            path="/characteristics"
            element={<CharacteristicsPage />}
          ></Route>
          <Route path="/articles" element={<ArticlesPage />}></Route>
          <Route path="/newProduct" element={<NewProductPage />}></Route>
          <Route path="/changeProduct/:id" element={<EditablePage />}></Route>
          <Route path="/branches" element={<BranchesPage />}></Route>
        </Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
