import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Product from "../Product/Product.jsx";
import {useDispatch, useSelector} from "react-redux";
import "./Products.scss";
import { fetchAsyncProducts, getAllProducts } from "../../features/productSlice.js";


const Products = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);
  
return (
    <>
      <div className="products-banner">
        <div className="banner-container">
          <div className="banner-sub-container">
            <div className="right">
              <div className="title-container">
                <h2 className="main-title">Products</h2>
              </div>
            </div>
            <div className="left">
                <Link to = "/products">See all</Link>
                <BsArrowRight />
              </div>
            
          </div>
          <div className="products-container">
            {
              products?.slice(0, 5).map((product, idx) => (
                <Product product = {product} key = {idx}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
