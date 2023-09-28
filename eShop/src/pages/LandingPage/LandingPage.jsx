import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContextProvider";

export const LandingPage = () => {
	const { productsData } = useContext(ProductsContext);
	console.log(productsData);
	return (
		<>
			<h1>Landing Page</h1>
			<h3>Carousel Compent</h3>
			<h3>Popular items based on items sold</h3>
			<footer>
				<p>This is footer. Include links to contact page and about us page</p>
				<p>Maybe include guide</p>
			</footer>
		</>
	);
};
