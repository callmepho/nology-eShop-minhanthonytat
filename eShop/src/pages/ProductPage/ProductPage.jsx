import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import Variations from "../../components/Variations/Variations";

const ProductPage = () => {
	const [page, setPage] = useState(null);
	const [total, setTotal] = useState({});
	const [stock, setStock] = useState({});
	const [quantity, setQuantity] = useState(1);
	let { category, id } = useParams();
	const { productsData } = useContext(ProductsContext);

	const getTotal = () => {
		return Object.values(total).reduce((init, next) => init + next, 0);
	};

	const getStock = () => {
		if (Object.keys(stock).length > 0) {
			return Object.values(stock).reduce((init, next) =>
				init > next ? next : init
			);
		} else {
			return null;
		}
	};

	const handleQuantity = (e) => {
		setQuantity(e.target.value);
		if (quantity < 0) {
			setQuantity("1");
		}
	};

	const handleSubmit = () => {
		if (quantity > getStock()) {
			setQuantity(`${getStock()}`);
		}
	};

	useEffect(() => {
		if (!productsData) {
			return;
		}
		setPage(productsData[category].find((item) => item.id == id));
	}, []);
	useEffect(() => {
		console.log(page);
		if (page?.price) {
			setTotal({ ...total, base: page?.price });
		}
		if (page?.stock) {
			setStock({ ...stock, base: page?.stock });
		}
	}, [page]);
	useEffect(() => {
		console.log(quantity);
	}, [total, stock, quantity]);

	return (
		<div>
			<img src={page?.imgLink} />
			<div>
				<h1>{page?.name}</h1>
				<Variations
					page={page}
					setTotal={setTotal}
					total={total}
					setStock={setStock}
					stock={stock}
				/>
				<h3>Price: ${getTotal()}</h3>
				{getStock() && <h4>Stock: {getStock()}</h4>}
				<input
					min="1"
					value={quantity}
					max={getStock()}
					onChange={handleQuantity}></input>
				<button onClick={handleSubmit}>test</button>
			</div>
		</div>
	);
};

export default ProductPage;
