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
  const [options, setOptions] = useState({});
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
    setQuantity(e.target.value);
  };

  const updateCart = () => {
    const toAdd = {
      id: page.id,
      imgLink: page.imgLink,
      name: page.name,
      options: options,
      stock: stock,
      quantity: parseInt(quantity),
      total: getTotal(),
    };
    let temp = cart;
    let index = temp.findIndex(
      (item) =>
        item.id == toAdd.id &&
        JSON.stringify(item.options) === JSON.stringify(toAdd.options)
    );
    if (index !== -1) {
      temp[index].quantity = temp[index].quantity + toAdd.quantity;
      setCart(temp);
    } else {
      setCart([...cart, toAdd]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    if (page?.price) {
      setTotal({ ...total, base: page?.price });
    }
    if (page?.stock) {
      setStock({ ...stock, base: page?.stock });
    }
  }, [page]);

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
