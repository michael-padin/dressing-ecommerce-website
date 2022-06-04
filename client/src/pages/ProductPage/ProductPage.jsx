import React, { useEffect, useState } from "react";
import {AiFillStar,AiOutlineStar,AiOutlineMinus,AiOutlinePlus,} from "react-icons/ai";
import "./ProductPage.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchAsyncSelectedProduct,refreshSelectedProduct,} from "../../features/productSlice.js";
import { addAsyncCart, addAsyncCartQuantity, addProduct, addQuantity } from "../../features/cartSlice.js";

const ProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {currentUser} = useSelector((state) => state.user)
  const { selectedProduct } = useSelector((state) => state.products);
  const { products } = useSelector((state) => state.cart);

  const productId = location.pathname.split("/")[2];

  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState('');
  const [size, setSize] = useState('');
  const [userProduct, setUserProduct] = useState('');

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchAsyncSelectedProduct(productId));
    return () => {
      dispatch(refreshSelectedProduct());
    };
  }, [productId, dispatch]);

  useEffect(() => {
    setUserProduct(() => ({...selectedProduct, size, quantity}))
  }, [selectedProduct, size, quantity]);

  
  const getProducts = () => {
    const totalPrice = products?.map((product) => product.totalPrice).reduce((a, b) => a + b, 0);
    // @ts-ignore
    const product = products?.find((product) =>product._id === userProduct._id &&product.size === userProduct.size);

    if (product) {
      // @ts-ignore
      dispatch(addAsyncCartQuantity({ quantity, productSize: product.size, productId: userProduct._id, userId: currentUser._id }));

    } else {
      // @ts-ignore
      dispatch(addAsyncCart({ products: {...userProduct, totalPrice}, userId: currentUser._id }));;
    }
  };

  const handleQuantity = (type) => {
      if (type === "increase"){
        setQuantity(quantity +1);
      } else if (type === 'decrease') {
        quantity > 1 && setQuantity(quantity - 1);
      }
  }
  const handleSize = (size) => {
     setActive(size)
     setSize(size)
     console.log(size);
  }

  const handleBuyNow = () => {
    getProducts();
    
  };


  return (
    <>
      <div className="products-header-image">
        <div className="page-title-container">
          <div className="products-heading-container">
            <div className="products-info-container">
              <h2 className="page-title active">{selectedProduct.title}</h2>
              <ul>
                <li><Link to="/" className="link-items">Home</Link></li>
                <div className="separator"></div>
                <li><Link to="/products" className="link-items">products</Link></li>
                <div className="separator"></div>
                <li><Link to={`/product/${selectedProduct._id}`}className="active">{selectedProduct.title}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={selectedProduct.img} className="product-detail-image" alt="women"/>
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
              {
                selectedProduct?.size?.map((size, index) => (
                <div className={`${active === size && 'active-size'} sizes`} key = {index} onClick={() => handleSize(size)}>
                  <p>{size}</p>
                </div>
                ))
                }
            </div>
          </div>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <button className="minus" onClick={()=>handleQuantity('decrease')}>
                <AiOutlineMinus />
              </button>
              <span className="num">{quantity}</span>
              <button className="plus" onClick={()=>handleQuantity('increase')}>
                <AiOutlinePlus />
              </button>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={handleBuyNow}
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
