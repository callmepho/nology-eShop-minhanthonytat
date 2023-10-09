import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
