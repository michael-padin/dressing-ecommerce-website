import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import "./ProductPage.scss";
import collection1 from "../../assets/collection1.png";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const decQty = () => {};
  const incQty = () => {};
  const handleBuyNow = () => {};
  const onAdd = (product, qty) => {};

  return (
    <>
      <div className="products-header-image">
        <div className="page-title-container">
          <div className="products-heading-container">
            <div className="products-info-container">
              <h2 className="page-title">HOME</h2>
              <ul>
                <li><Link to = "/home">HOme</Link></li>
                <div className="separator"></div>
                <li><Link to = "/products">products</Link></li>
                <div className="separator"></div>
                <li><Link to = "/">current product</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-container">
       
        <div className="product-image-container">
          <img src={collection1} className="product-detail-image" />
        </div>

        <div className="product-detail-desc">
          <h1>Manok ni san pedro</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="price">${11}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">1</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd("sdfsdfsdf", 1)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
