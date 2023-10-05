import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import Variations from "../../components/Variations/Variations";

const ProductPage = () => {
	const [page, setPage] = useState(null);
	const [total, setTotal] = useState(0);
	let { category, id } = useParams();
	const { productsData } = useContext(ProductsContext);

	useEffect(() => {
		if (!productsData) {
			return;
		}
		setPage(productsData[category].find((item) => item.id == id));
	}, []);
	useEffect(() => {
		console.log(page);
		setTotal(page?.price);
	}, [page]);
	useEffect(() => {
		console.log(total);
	}, [total]);
	return (
		<div>
			<img src={page?.imgLink} />
			<div>
				<h1>{page?.name}</h1>
				<h4>Price: ${total}</h4>
				<Variations page={page} setTotal={setTotal} />
			</div>
		</div>
	);
};

export default ProductPage;
