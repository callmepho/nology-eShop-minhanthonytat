import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import Variations from "../../components/Variations/Variations";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const [page, setPage] = useState(null);
  const [total, setTotal] = useState({});
  const [stock, setStock] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(null);
  let { category, id } = useParams();
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
    if (quantity < 0) {
      setQuantity("1");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setError(null);
    setCart(null);
    if (quantity > getStock()) {
      setQuantity(`${getStock()}`);
      setError("Not enough stock.");
    } else if (quantity < 0) {
      setQuantity(1);
      setError(`${quantity} invalid quantity.`);
    } else if (quantity <= getStock()) {
      setCart(true);
    }
  };

  useEffect(() => {
    if (!productsData) {
      return;
    }
    setPage(productsData[category].find((item) => item.id == id));
  }, []);
  useEffect(() => {
    console.log(page);
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
        {cart && <p>Add to cart.</p>}
      </div>
    </div>
  );
};

export default ProductPage;
