import { getAllProducts } from "../services/eShop-firestore-service.js";
import { createContext, useState, useEffect } from "react";

import React from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
	const [productsData, setProductsData] = useState(null);
	const reloadProduct = () => {
		getAllProducts()
			.then((productsData) => setProductsData(productsData))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		reloadProduct();
		console.log(productsData);
	}, []);

	return (
		<ProductsContext.Provider value={{ productsData, setProductsData }}>
			{children}
		</ProductsContext.Provider>
	);
};
