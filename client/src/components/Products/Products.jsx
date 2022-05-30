import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Product from "../Product/Product.jsx";
import "./Products.scss";
const Products = () => {
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
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
