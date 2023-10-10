import { useEffect, useState } from "react";
import styles from "./CartCard.module.scss";

import { NavLink } from "react-router-dom";

const CartCard = ({ item, setCart, cart, setCheckout }) => {
	const [error, setError] = useState(null);
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
		if (item.quantity > 1) {
			setCart(
				cart.map((card) => {
					if (card == item) {
						card.quantity--;
						return card;
					} else {
						return card;
					}
				})
			);
		} else {
			setCart(cart.filter((card) => card != item));
		}
	};

	const increaseQuantity = () => {
		setCart(
			cart.map((card) => {
				if (card == item) {
					card.quantity++;
					return card;
				} else {
					return card;
				}
			})
		);
	};

	useEffect(() => {
		stockCheck();
	}, [cart]);
	return (
		<div className={error ? styles.card_error : styles.card}>
			<div className={styles.card_left}>
				<NavLink to={`/products/${item.category}/${item.id}`}>
					<img className={styles.card_img} src={item.imgLink} alt={item.id} />
				</NavLink>
				<div>
					<h3>Item: {item.name}</h3>
					{Object.keys(item.options).length > 0 && <span>Options: </span>}
					{Object.keys(item.options).map((option) => (
						<span>{`${option} - ${item.options[option]}  `}</span>
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
