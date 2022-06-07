
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import nodata from "../../assets/no-data.svg";
import {  AiOutlineDelete } from "react-icons/ai";

import {deleteAsyncCartItem, fetchAsyncCart,} from "../../features/cartSlice.js";
import "./CartPage.scss";
import { useEffect, useState, CSSProperties } from "react";

import BeatLoader from "react-spinners/BeatLoader";


const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, totalPrice, status } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const [showMessage, setShowMessage] = useState('');

  useEffect(() => {
    currentUser && dispatch(fetchAsyncCart(currentUser._id));
  }, [])
  
   useEffect(() => {
    if (status === 'pending') {
      setShowMessage("show-message");
    } else if (status === 'fulfilled') {
      setShowMessage(null);
    }
  }, [status]);

  const handleDelete = (size, productId, productTotalPrice) => {
    dispatch(
      // @ts-ignore
      deleteAsyncCartItem({size,productId: productId,userId: currentUser._id,productPrice: productTotalPrice,})
    );
  };

  const handleBuy = () => {
      navigate("/checkout", {state:{
        products: products,
        totalPrice
      }})
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
                <Link to={`/product/${product._id}`}>
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
                <div className="cart-product-size">
                  <p>
                    Quantity: <span>{product.quantity}</span>
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
                  onClick={() =>handleDelete(product.size, product._id, product.totalPrice)}>
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
            <button type="button" className="buy-now"  onClick = {handleBuy}>
              Check out
            </button>
          </div>
        </div>
      )}
       <div className = {`${showMessage} cart-loader-wrapper`}>
          {
          status === 'pending' &&
          <BeatLoader color= "#ff6280" loading={true}  size={15} />
            }
        </div>
    </div>
  );
};

export default CartPage;
