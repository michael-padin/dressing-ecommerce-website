import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Product.scss";

const Product = () => {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <img
          src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
        />
        <div className="info">
          <div className="search-icon-container">
            <Link to="/product/hello-world">
              <BsSearch />
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="product-title"><h4>Product</h4></div>
        <div className="product-price">
          <p>100 $</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
