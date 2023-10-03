import { useContext } from "react";
import ProductList from "../../containers/ProductList/ProductList";
import { ProductsContext } from "../../context/ProductContextProvider";

const AccessoriesPage = () => {
	const { productsData } = useContext(ProductsContext);
	const { accessories } = productsData;
	return (
		<div>
			<h1>Accessories</h1>
			<ProductList productsData={accessories} page={"accessories"} />
		</div>
	);
};

export default AccessoriesPage;
