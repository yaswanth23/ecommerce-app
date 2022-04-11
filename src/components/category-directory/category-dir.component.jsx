import React from "react";
import "./category-dir.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const CategoryDir = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <DirectoryItem key={item.id} category={item} />
      ))}
    </div>
  );
};

export default CategoryDir;
