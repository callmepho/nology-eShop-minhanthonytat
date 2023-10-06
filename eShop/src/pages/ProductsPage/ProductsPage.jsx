import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContextProvider";
import ProductList from "../../containers/ProductList/ProductList";

const ProductsPage = () => {
  const [page, setPage] = useState(null);
  const { productsData } = useContext(ProductsContext);
  let param = useParams();
  useEffect(() => {
    setPage(param.category);
  }, [param]);

  useEffect(() => {
    console.log("page in productpage", page);
  }, [page]);
  return (
    <div>
      <ProductList productsData={productsData[page]} page={page} />
    </div>
  );
};

export default ProductsPage;
