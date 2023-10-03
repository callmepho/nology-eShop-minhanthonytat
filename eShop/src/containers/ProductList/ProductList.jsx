import { useState, useEffect } from "react";
import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
import { NavLink, useParams } from "react-router-dom";

const ProudctList = ({ productsData, page }) => {
	const [pageData, setPageData] = useState(null);
	useEffect(() => {
		if (!productsData) {
			return;
		}
		console.log(productsData);
		setPageData(productsData);
	}, [productsData]);
	return (
		<div className={styles.test}>
			<div className={styles.container}>
				{pageData !== null &&
					pageData.map((card, index) => {
						return (
							<NavLink to={`/products/${page}/${card.name}`}>
								<ProductCard
									key={`${index}`}
									name={card.name}
									img={card.imgLink}
									price={card.price}
								/>
							</NavLink>
						);
					})}
			</div>
		</div>
	);
};

export default ProudctList;
