import { createContext, useState, useEffect } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../config/firestore";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const updateCart = async () => {
    try {
      await addDoc(collection(db, "cart"), cart);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!cart) {
      return;
    }
    updateCart();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
