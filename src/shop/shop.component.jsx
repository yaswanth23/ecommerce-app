import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../rotues/categories-preview/categories-preview.component";
import Category from "../rotues/category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
