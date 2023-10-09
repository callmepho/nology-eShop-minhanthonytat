import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";

const CartPage = () => {
	const { cart, useCart } = useContext(CartContext);

	useEffect(() => {}, [cart]);
	return (
		<div>
			{cart.length > 0 &&
				cart.map((item, index) => <h3 key={index}>{item.name}</h3>)}
		</div>
	);
};

export default CartPage;
