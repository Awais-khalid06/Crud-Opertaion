import React, { useEffect, useState } from "react";
import { add } from "../Redux-toolkit-store/createSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux-toolkit-store/productSlice";
import { STATUSES } from "../Redux-toolkit-store/productSlice";

const Products = () => {
  //const [Products, setProucts] = useState([]);

  const dispatch = useDispatch();
  const { data: Products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   setProucts(data);
    // };

    // fetchProducts();
  }, []);

  const handlechange = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {Products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handlechange(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
