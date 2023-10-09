import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
