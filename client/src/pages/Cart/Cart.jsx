import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import collection1 from "../../assets/collection1.png";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
const Cart = () => {
  return (
    <div className="cart-page-container">
      <div className="cart-sub-container">
        <div className="cart-links">
          <button>
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
        <div className="bottom-cart-container">
          <div className="cart-product-detail">
            <div className="cart-product-image-container">
              <Link to="/">
                <img src={collection1} alt="" />
              </Link>
            </div>
            <div className="cart-product-details">
              <div className="cart-product-name">
                <p>
                  Product: <span>fine knit jumper</span>
                </p>
              </div>
              <div className="cart-product-color">
                <p>
                  Color: <span>fine knit jumper</span>
                </p>
              </div>
              <div className="cart-product-size">
                <p>
                  Size: <span>fine knit jumper</span>
                </p>
              </div>
              <div className="cart-product-price">
                <p>
                  Price: <span>fine knit jumper</span>
                </p>
              </div>
            </div>
          </div>
          <div className="cart-right-section">
            <div className="product-quantity-container">
              <div className="quantity">
                <p className="quantity-desc">
                  <span className="minus" onClick={() => "fdf"}>
                    <AiOutlineMinus />
                  </span>
                  <span className="num">1</span>
                  <span className="plus" onClick={() => "fdf"}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <p className="cart-price">${11}</p>
              <div className="delete-icon-container">
                <AiOutlineDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-summary-container">
        <h1 className="summary-title">ORDER SUMMARY</h1>
        <div className="total-container">
          <span className="total-label">Total</span>
          <span className="total-price">$11.00</span>
        </div>
        <div className="buy-now-container">
          <button type="button" className="buy-now" onClick="">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
