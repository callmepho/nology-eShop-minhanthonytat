import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import ProductList from "../../containers/ProductList/ProductList";

const ProductPage = () => {
	const [page, setPage] = useState(null);
	const { productsData } = useContext(ProductsContext);
	const { accessories } = productsData;
	let param = useParams();
	console.log(param);
	return (
		<div>
			<h1>Accessories</h1>
			<ProductList productsData={accessories} page={"accessories"} />
		</div>
	);
};

export default ProductPage;
