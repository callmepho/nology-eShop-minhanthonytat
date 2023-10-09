import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import Variations from "../../components/Variations/Variations";
import styles from "./ProductPage.module.scss";
import { CartContext } from "../../context/CartContextProvider";

const ProductPage = () => {
	const [page, setPage] = useState(null);
	const [total, setTotal] = useState({});
	const [stock, setStock] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [error, setError] = useState(null);
	const [valid, setValid] = useState(null);
	const [options, setOptions] = useState([]);
	let { category, id } = useParams();

	const { cart, setCart } = useContext(CartContext);
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
		pa;
		setQuantity(e.target.value);
	};

	const updateCart = () => {
		const toAdd = {
			id: page.id,
			name: page.name,
			options: options,
			stock: stock,
			quantity: parseInt(quantity),
			total: getTotal(),
		};
		setCart([...cart, toAdd]);
		const tempCart = cart.map((item) => {
			if ((item = item.id == tempCart.id && item.options == tempCart.options)) {
			}
		});
		if (check) {
			console.log(check);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		setError(null);
		setValid(null);
		if (quantity > getStock()) {
			setQuantity(getStock());
			setError("Not enough stock.");
		} else if (quantity <= getStock()) {
			setValid(true);
			updateCart();
		} else {
			setQuantity(1);
			setError(`${quantity} invalid quantity.`);
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
		console.log(stock);
		console.log(total);
	}, [stock, total]);

	return (
		<div className={styles.page}>
			<img className={styles.page_img} src={page?.imgLink} />
			<div className={styles.page_info}>
				<h1>{page?.name}</h1>
				<form onSubmit={handleSubmit}>
					<Variations
						page={page}
						setTotal={setTotal}
						total={total}
						setStock={setStock}
						stock={stock}
						options={options}
						setOptions={setOptions}
					/>
					<h3>Price: ${getTotal()}</h3>
					{getStock() && <h4>Stock: {getStock()}</h4>}
					<label htmlFor="quantity">Quantity: </label>
					<input
						id="quantity"
						name="quantity"
						min="1"
						value={quantity}
						max={getStock()}
						onChange={handleQuantity}
						className={styles.quantity}
						required></input>
					<button type="submit">test</button>
				</form>
				{error && <p>{error}</p>}
				{valid && <p>Add to cart.</p>}
			</div>
		</div>
	);
};

export default ProductPage;
