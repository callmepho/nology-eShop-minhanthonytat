import { useContext } from "react";
import ProductList from "../../containers/ProductList/ProductList";
import { ProductsContext } from "../../context/ProductContextProvider";

const SwitchesPage = () => {
	const { productsData } = useContext(ProductsContext);
	const { switches } = productsData;
	return (
		<div>
			<h1>Switches</h1>
			<ProductList productsData={switches} page={"switches"} />
		</div>
	);
};

export default SwitchesPage;
