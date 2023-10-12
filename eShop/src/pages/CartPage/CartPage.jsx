import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartPage.module.scss";

const CartPage = () => {
	const { cart, setCart } = useContext(CartContext);
	const [total, setTotal] = useState(0);
	const [checkout, setCheckout] = useState(false);
	const getTotal = () => {
		let amount = 0;
		cart.forEach((item) => {
			amount += item.total * item.quantity;
		});
		return amount;
	};
	useEffect(() => {
		if (!cart) {
			return;
		}
		console.log(cart);
		if (cart) {
			setTotal(getTotal());
		}
	}, [cart]);

	return (
		<div>
			<div className={styles.list}>
				{cart &&
					cart.length > 0 &&
					cart.map((item, index) => (
						<CartCard
							key={item.id}
							item={item}
							setCart={setCart}
							cart={cart}
							setCheckout={setCheckout}
						/>
					))}
			</div>
			{cart.length > 0 ? <h2>Total: ${total}</h2> : <h2>Cart is empty</h2>}
			{cart.length > 0 && !checkout ? (
				<button className={styles.checkout}>Checkout</button>
			) : (
				<button className={styles.checkout} disabled>
					Checkout
				</button>
			)}
		</div>
	);
};

export default CartPage;
