import { createContext, useState, useEffect } from "react";
import {
	doc,
	addDoc,
	collection,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firestore";
import { subscribeToCart } from "../services/eShop-firestore-service";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = async (cartItem) => {
		try {
			await addDoc(collection(db, "cart"), cartItem);
		} catch (e) {}
	};

	const editCart = async (id, cartItem) => {
		try {
			await updateDoc(doc(db, "cart", id), cartItem);
		} catch (e) {}
	};

	const deleteCart = async (id) => {
		try {
			await deleteDoc(doc(db, "cart", id));
		} catch (e) {}
	};

	useEffect(() => {
		const unsub = subscribeToCart(setCart);
		return () => unsub();
	}, []);

	return (
		<CartContext.Provider
			value={{ cart, setCart, addToCart, editCart, deleteCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
