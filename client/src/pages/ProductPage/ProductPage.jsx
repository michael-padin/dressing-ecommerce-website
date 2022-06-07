import React, { useEffect, useState, CSSProperties } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {AiFillStar,AiOutlineStar,AiOutlineMinus,AiOutlinePlus,AiOutlineCloseCircle} from "react-icons/ai";
import {MdOutlineClose} from "react-icons/md";

import BeatLoader from "react-spinners/BeatLoader";

import {
  fetchAsyncSelectedProduct,
  refreshSelectedProduct,
} from "../../features/productSlice.js";
import { addAsyncCart, addAsyncCartQuantity } from "../../features/cartSlice.js";
import "./ProductPage.scss";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#ff6280",
};


const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const { currentUser } = useSelector((state) => state.user);
  const { selectedProduct } = useSelector((state) => state.products);
  const { products, status } = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState("");
  const [size, setSize] = useState("");
  const [userProduct, setUserProduct] = useState("");
  const [warningMessage, setWarningMessage] = useState();
  const [showMessage, setShowMessage] = useState('');

  

  // fetch single product
  useEffect(() => {
    dispatch(fetchAsyncSelectedProduct(productId));
    return () => {
      dispatch(refreshSelectedProduct());
    };
  }, [productId, dispatch]);

  // set user selected Item
  useEffect(() => {
    setUserProduct(() => ({ ...selectedProduct, size, quantity }));
  }, [selectedProduct, size, quantity]);

  // set user selected Item
  useEffect(() => {
    if (status === 'pending') {
      setShowMessage("show-message");
      document.body.style.overflow = 'hidden';
    } else if (status === 'fulfilled') {
      setShowMessage(null);
      document.body.style.overflow = 'auto';
    }
  }, [status]);

  // handle quantity
  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };
  const handleSize = (size) => {
    setActive(size);
    setSize(size);
  };

  const handleCart = () => {

    const totalPrice = userProduct.price * quantity;

    // @ts-ignore
    const product = products?.find((product) =>product._id === userProduct._id && product.size === userProduct.size);

    if (size === ''){
      setShowMessage("show-message")
      setWarningMessage("Please select a size")
      document.body.style.overflow = 'hidden';
    }else if (product) {
      // @ts-ignore
      dispatch(addAsyncCartQuantity({ userId: currentUser._id, productId: product._id, productSize: product.size, quantity}));
    } else {
      // @ts-ignore
      dispatch(addAsyncCart({products: { ...userProduct, totalPrice },userId: currentUser._id,}));
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout", {state:{
      products: [{...userProduct, totalPrice: quantity * userProduct.price}],
      totalPrice: quantity * userProduct.price
    }})
  };

  const handleCloseModal = () => {
    document.body.style.overflow = 'auto';
    setWarningMessage(null);
    setShowMessage(null)
  }

  return (
    <>
      <div className="products-header-image">
        <div className="page-title-container">
          <div className="products-heading-container">
            <div className="products-info-container">
              <h2 className="page-title active">{selectedProduct.title}</h2>
              <ul>
                <li>
                  <Link to="/" className="link-items">
                    Home
                  </Link>
                </li>
                <div className="separator"></div>
                <li>
                  <Link to="/products" className="link-items">
                    products
                  </Link>
                </li>
                <div className="separator"></div>
                <li>
                  <Link
                    to={`/product/${selectedProduct._id}`}
                    className="active"
                  >
                    {selectedProduct.title}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-container">
        <div className="product-image-container">
          <img
            src={selectedProduct.img}
            className="product-detail-image"
            alt="women"
          />
        </div>

        <div className="product-detail-desc">
          <h1>{selectedProduct.title}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>{selectedProduct.price}</p>
          </div>
          <h4>Details: </h4>
          <p>{selectedProduct.desc}</p>
          <p className="price">${selectedProduct.price}.00</p>
          <div className="size">
            <h3>Size:</h3>
            <div className="size-container">
              {selectedProduct?.size?.map((size, index) => (
                <div
                  className={`${active === size && "active-size"} sizes`}
                  key={index}
                  onClick={() => handleSize(size)}
                >
                  <p>{size}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <button
                className="minus"
                onClick={() => handleQuantity("decrease")}
              >
                <AiOutlineMinus />
              </button>
              <span className="num">{quantity}</span>
              <button
                className="plus"
                onClick={() => handleQuantity("increase")}
              >
                <AiOutlinePlus />
              </button>
            </p>
          </div>
          <div className="buttons">
            {currentUser ? (
              <>
                <button
                  type="button"
                  className="add-to-cart"
                  onClick={handleCart}
                >
                  Add to Cart
                </button>
                <button type="button" className="buy-now" onClick = {handleBuyNow}>
                  Buy Now
                </button>
              </>
            ) : (
              <>
                <Link to="/form">
                  <button type="button" className="add-to-cart">
                    Add to Cart
                  </button>
                </Link>
                <Link to="/form">
                  <button type="button" className="buy-now">
                    Buy now
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className = {`${showMessage} warning-message-wrapper`}>
          {
          status === 'pending' &&
          <BeatLoader color= "#ff6280" loading={status === 'pending' ? true : false} css={override} size={20} />
            }

          {
            warningMessage &&
            <div className="warning-message-container">
            <div className="close-modal-container" onClick = {handleCloseModal}><MdOutlineClose/></div>
            <p className="warning-message">{warningMessage}</p>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProductPage;
