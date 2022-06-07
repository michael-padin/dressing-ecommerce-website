import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate} from "react-router-dom";
import nodata from "../../assets/no-data.svg";
import { deleteAsyncAllCartItems } from "../../features/cartSlice.js";


const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location =useLocation();
  const pathname = location.pathname.split("/")[1];
  const {currentUser} = useSelector((state) => state.user);

  //states
  const [products, setProducts] = useState()
  const [totalPrice, settotalPrice] = useState();

  useEffect(() => {
    if (location.state){
      setProducts(() => location.state.products);
      settotalPrice(() => location.state.totalPrice);
    }
  }, [location])
  
  const handleCheckout = () => {
    if (currentUser) {
      dispatch(deleteAsyncAllCartItems({userId: currentUser._id}));
      navigate("/success");
    }
  }

  return (
    <>
    <div className="products-header-image">
        <div className="page-title-container">
          <div className="products-heading-container">
            <div className="products-info-container">
              <h2 className={`${pathname === 'checkout' && 'active'} page-title`}>CHECK OUT</h2>
              <ul>
                <li><Link to = "/" className={`${pathname === '' ? 'active' : 'link-items'} `}>Home</Link></li>
                <div className="separator"></div> 
                <li ><Link to = "/products" className={`${pathname === 'products' ? 'active' : 'link-items'} `}>products</Link></li>
                <div className="separator"></div> 
                <li ><Link to = "/cart" className={`${pathname === 'cart' ? 'active' : 'link-items'} `}>cart</Link></li>
                <div className="separator"></div> 
                <li ><Link to = "/checkout" className={`${pathname === 'checkout' ? 'active' : 'link-items'} `}>check out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <div className="cart-page-container">
      {
    location.state === null ? 
        <div className="no-data-container">
          <div className="no-data-image-container">
            <img src={nodata} alt="no data" />
          </div>
          <span className="no-data-text"> No items to check out</span>
        </div> :
        <>
    <div className="cart-sub-container">
      {products?.map((product, index) => (
        <div className="bottom-cart-container" key={index}>
          <div className="cart-product-detail">
            <div className="cart-product-image-container">
              <Link to= {`/products/${product.id}`}>
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
            </div>
          </div>
        </div>
      ))}
    </div>
      <div className="order-summary-container">
        <h1 className="summary-title">Total Payment</h1>
        <div className="total-container">
          <span className="total-label">Total</span>
          <span className="total-price">${totalPrice}</span>
        </div>
        <div className="buy-now-container">
          <button type="button" className="buy-now"  onClick = {handleCheckout}>
            Place order
          </button>
        </div>
      </div>
      </>
}
  </div>
  </>
  )
}

export default CheckoutPage