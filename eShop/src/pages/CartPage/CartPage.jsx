import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartPage.module.scss";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
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
    setTotal(getTotal());
  }, [cart]);

  return (
    <div>
      <div className={styles.list}>
        {cart.length > 0 &&
          cart.map((item, index) => (
            <CartCard
              key={"cartcard" + index}
              item={item}
              setCart={setCart}
              cart={cart}
            />
          ))}
      </div>
      {total > 0 ? <h2>Total: ${total}</h2> : <h2>Cart is empty</h2>}
    </div>
  );
};

export default CartPage;
