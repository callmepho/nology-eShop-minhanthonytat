import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import Variations from "../../components/Variations/Variations";
import styles from "./ProductPage.module.scss";
import { CartContext } from "../../context/CartContextProvider";
import Modal from "../../components/Modal/Modal";
import _ from "lodash";
import Favourite from "../../components/Favourite/Favourite";
const ProductPage = () => {
  const [page, setPage] = useState(null);
  const [total, setTotal] = useState({});
  const [stock, setStock] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(null);
  const [options, setOptions] = useState({});
  const [modal, setModal] = useState(false);
  let { category, id } = useParams();
  const { cart, setCart, addToCart, editCart } = useContext(CartContext);
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
      nav: `${category}/${id}`,
      imgLink: page.imgLink,
      name: page.name,
      options: options,
      stock: stock,
      quantity: parseInt(quantity),
      total: getTotal(),
    };
    let temp = cart;
    console.log(temp, "temp");
    let index = temp.find((item) => {
      console.log(item, "item");
      if (item.name == toAdd.name && _.isEqual(item.options, toAdd.options)) {
        console.log(item, "found");
        return item;
      }
    });
    if (index) {
      let quantity = index.quantity + toAdd.quantity;
      editCart(index.id, { quantity: quantity });
    } else {
      addToCart(toAdd);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setValid(null);
    if (quantity > getStock()) {
      setQuantity(getStock());
      setError("Not enough stock.");
    } else if (quantity <= getStock() && quantity > 0) {
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
    setPage(productsData.find((product) => product.id === id));
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
      <img
        className={styles.page_img}
        src={page?.imgLink}
        onClick={() => setModal(true)}
      />

      {modal && <Modal img={page?.imgLink} setModal={setModal} />}
      <div className={styles.page_info}>
        <div className={styles.page_header}>
          <h1>{page?.name}</h1>
          <Favourite page={page} />
        </div>
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
          <div>
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
          </div>
          <button className={styles.page_info_form_btn} type="submit">
            Add to cart
          </button>
        </form>
        {error && <p className={styles.page_error}>{error}</p>}
        {valid && <p>Add to cart.</p>}
      </div>
    </div>
  );
};

export default ProductPage;
