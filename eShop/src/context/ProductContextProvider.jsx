import { getAllProducts } from "../services/eShop-firestore-service.js";
import { createContext, useState, useEffect } from "react";

import React from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(null);
  const [carouselData, setCarouselData] = useState(null);
  const reloadProduct = () => {
    getAllProducts()
      .then((data) => {
        setProductsData(data[1]);
        setCarouselData(data[0]);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    reloadProduct();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productsData, setProductsData, carouselData, setCarouselData }}>
      {children}
    </ProductsContext.Provider>
  );
};
