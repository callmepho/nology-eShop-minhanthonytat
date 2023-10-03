import { useContext } from "react";
import ProductList from "../../containers/ProductList/ProductList";
import { ProductsContext } from "../../context/ProductContextProvider";

const DeskmatPage = () => {
	const { productsData } = useContext(ProductsContext);
	const { deskmats } = productsData;
	return (
		<div>
			<h1>Deskmats</h1>
			<ProductList productsData={deskmats} page={"deskmats"} />
		</div>
	);
};

export default DeskmatPage;
