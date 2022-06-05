import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import nodata from "../../assets/no-data.svg";
import {  AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {deleteAsyncCartItem,} from "../../features/cartSlice.js";
const Cart = () => {
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  const handleDelete = (size, productId, productTotalPrice) => {
    dispatch(
      // @ts-ignore
      deleteAsyncCartItem({size,productId: productId,userId: currentUser._id,productPrice: productTotalPrice,})
    );
  
  };

  return (
    <div className="cart-page-container">
      <div className="cart-sub-container">
        <div className="cart-links">
          <button>
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
        {products.map((product, index) => (
          <div className="bottom-cart-container" key={index}>
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
                
                <p className="cart-price">${product.totalPrice}</p>
                <div
                  className="delete-icon-container"
                  onClick={() =>
                    handleDelete(product.size, product._id, product.totalPrice)
                  }
                >
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {Object.keys(products).length === 0 ? (
        <div className="no-data-container">
          <div className="no-data-image-container">
            <img src={nodata} alt="no data" />
          </div>
          <span className="no-data-text">Your shopping cart is empty..</span>
        </div>
      ) : (
        <div className="order-summary-container">
          <h1 className="summary-title">ORDER SUMMARY</h1>
          <div className="total-container">
            <span className="total-label">Total</span>
            <span className="total-price">${totalPrice}</span>
          </div>
          <div className="buy-now-container">
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
