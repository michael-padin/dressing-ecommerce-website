import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import collection1 from "../../assets/collection1.png";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyncCartItem } from "../../features/cartSlice.js";
const Cart = () => {
  const dispatch = useDispatch();
  const {products, totalPrice} = useSelector((state) => state.cart);
  const {currentUser} = useSelector((state) => state.user);

  // @ts-ignore
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleDelete = (size, product_id) => {
    // @ts-ignore
    dispatch(deleteAsyncCartItem({size, productId:  product_id, userId: currentUser._id}));
  }


  return (
    <div className="cart-page-container">
      <div className="cart-sub-container" >
        <div className="cart-links">
          <button>
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
        {
          products.map((product, index) =>(
        <div className="bottom-cart-container" key  = {index}>
          <div className="cart-product-detail">
            <div className="cart-product-image-container">
              <Link to="/">
                <img src={product.img} alt="" />
              </Link>
            </div>
            <div className="cart-product-details">
              <div className="cart-product-name">
                <p>
                  Product: <span>{product.title}</span>
                </p>
              </div>
             {/*  <div className="cart-product-color">
                <p>
                  Color: <span>fine knit jumper</span>
                </p>
              </div> */}
              <div className="cart-product-size">
                <p>
                  Size: <span>{product.size}</span>
                </p>
              </div>
              <div className="cart-product-price">
                <p>
                  Price: <span>${product.price}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="cart-right-section">
            <div className="product-quantity-container">
              <div className="quantity">
                <p className="quantity-desc">
                  <span className="minus">
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{product.quantity}</span>
                  <span className="plus" >
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <p className="cart-price">${product.totalPrice}</p>
              <div className="delete-icon-container" onClick = {() => handleDelete(product.size, product._id)}>
                <AiOutlineDelete />
              </div>
            </div>
          </div>
        </div>
        ))
          }
      </div>
      <div className="order-summary-container">
        <h1 className="summary-title">ORDER SUMMARY</h1>
        <div className="total-container">
          <span className="total-label">Total</span>
          <span className="total-price">${totalPrice}</span>
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
