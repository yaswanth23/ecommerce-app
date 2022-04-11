import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../shop-data.js";
//import { addCollectionAndDocuments } from "../utils/firebase/firbase.utils.jsx";
import { getCategoriesAndDocuments } from "../utils/firebase/firbase.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategories();
  }, []);

  // adding data to db from front end just for once
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
