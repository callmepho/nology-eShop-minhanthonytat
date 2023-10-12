import { useEffect, useState, useContext } from "react";
import styles from "./CartCard.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";

const CartCard = ({ item, setCart, cart, setCheckout }) => {
	const [error, setError] = useState(null);
	const { editCart, deleteCart } = useContext(CartContext);
	const stockCheck = () => {
		setCheckout(false);
		setError(null);
		Object.values(item.stock).forEach((option) => {
			if (option < item.quantity) {
				setError("Not enough stock");
				setCheckout(true);
			}
		});
	};

	const decreaseQuantity = () => {
		let temp = item;
		if (item.quantity > 1) {
			temp.quantity -= 1;
			editCart(item.id, temp);
		} else {
			deleteCart(item.id);
		}
	};

	const increaseQuantity = () => {
		let temp = item;
		temp.quantity += 1;
		editCart(item.id, temp);
	};

	useEffect(() => {
		stockCheck();
	}, [cart]);
	return (
		<div className={error ? styles.card_error : styles.card}>
			<div className={styles.card_left}>
				<NavLink to={`/products/${item.nav}`}>
					<img className={styles.card_img} src={item.imgLink} alt={item.id} />
				</NavLink>
				<div>
					<h3>Item: {item.name}</h3>
					{Object.keys(item.options).length > 0 && <span>Options: </span>}
					{Object.keys(item.options).map((option, index) => (
						<span
							key={
								"cartOption" + index
							}>{`${option} - ${item.options[option]}  `}</span>
					))}
					{error && <p className={styles.card_left_error}>{error}</p>}
				</div>
			</div>
			<div className={styles.card_right}>
				<h2>${item.total * item.quantity}</h2>
				<div className={styles.card_quantity}>
					<button
						className={styles.card_quantity_btn}
						onClick={decreaseQuantity}>
						-
					</button>
					<h4>Quantity: {item.quantity}</h4>
					<button
						className={styles.card_quantity_btn}
						onClick={increaseQuantity}>
						+
					</button>
				</div>
				<button
					className={styles.card_remove}
					onClick={() => setCart(cart.filter((card) => card != item))}>
					remove
				</button>
			</div>
		</div>
	);
};

export default CartCard;
