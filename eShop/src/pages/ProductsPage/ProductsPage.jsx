import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import ProductList from "../../containers/ProductList/ProductList";
import styles from "./ProductsPage.module.scss";
import Footer from "../../containers/Footer/Footer";

const ProductsPage = () => {
  const [page, setPage] = useState(null);
  const { productsData } = useContext(ProductsContext);
  let param = useParams();

  useEffect(() => {
    setPage(param.category);
  }, [param]);
  return (
    <div className={styles.container}>
      {productsData && <ProductList productsData={productsData} page={page} />}
      <Footer />
    </div>
  );
};

export default ProductsPage;
