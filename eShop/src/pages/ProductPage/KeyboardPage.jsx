import { useContext } from "react";
import ProductList from "../../containers/ProductList/ProductList";
import { ProductsContext } from "../../context/ProductContextProvider";

const KeyboardPage = () => {
	const { productsData } = useContext(ProductsContext);
	const { keyboards } = productsData;
	return (
		<div>
			<h1>Keyboards</h1>
			<ProductList productsData={keyboards} page={"keyboards"} />
		</div>
	);
};

export default KeyboardPage;
