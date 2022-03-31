import React from "react";
import "./category-dir.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryDir = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default CategoryDir;
