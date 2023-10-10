import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ name, img, price }) => {
	return (
		<div className={styles.card}>
			<img className={styles.card_img} src={img} />
			<h3 className={styles.card_info}>{name}</h3>
			<h4 className={styles.card_info}>From: ${price}</h4>
		</div>
	);
};

export default ProductCard;
