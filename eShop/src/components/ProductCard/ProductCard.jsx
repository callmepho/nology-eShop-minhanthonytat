import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ name, img, price }) => {
  return (
    <div className={styles.card}>
      <img src={img} />
      <h3>{name}</h3>
      <h4>From: ${price}</h4>
    </div>
  );
};

export default ProductCard;
