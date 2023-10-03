import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
	const [page, setPage] = useState(null);
	let { category, id } = useParams();

	useEffect(() => {
		console.log("page in productpage", page);
	}, [page]);
	return (
		<div>
			Test {category} and {id}
		</div>
	);
};

export default ProductPage;
