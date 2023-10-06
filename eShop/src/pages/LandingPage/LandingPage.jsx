import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContextProvider";
import Carousel from "../../containers/Carousel/Carousel";
import Footer from "../../containers/Footer/Footer";

export const LandingPage = () => {
  const { productsData } = useContext(ProductsContext);
  console.log(productsData);
  return (
    <>
      <h1>Landing Page</h1>
      <h3>Carousel Component</h3>
      <Carousel />
      <h3>Popular items based on items sold</h3>
      <Footer />
    </>
  );
};
