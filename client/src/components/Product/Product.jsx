import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Product.scss";

const Product = ({product}) => {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <img
          src={product.img}
          alt="dress"
        />
        <div className="info">
          <div className="search-icon-container">
            <Link to= {`/product/${product._id}`}>
              <BsSearch />
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="product-title"><h4>{product.title}</h4></div>
        <div className="product-price">
          <p>${product.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
