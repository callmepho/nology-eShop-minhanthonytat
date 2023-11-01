import {
  subscribeToCarousel,
  subscribeToProducts,
} from "../services/eShop-firestore-service.js";
import { createContext, useState, useEffect } from "react";

import React from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(null);
  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    const unsub = subscribeToProducts(setProductsData);
    return () => unsub();
  }, []);

  useEffect(() => {
    const unsub = subscribeToCarousel(setCarouselData);
    return () => unsub();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productsData, setProductsData, carouselData, setCarouselData }}>
      {children}
    </ProductsContext.Provider>
  );
};
