import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscTriangleUp } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCart} from "../../features/cartSlice.js";
import { logoutStart } from "../../features/userSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  
  const { products, status } = useSelector((state) => state.cart);
  const {currentUser}  = useSelector((state) => state.user);
  const [modalClass, setModalClass] = useState(false);


  useEffect(() => {
    if(currentUser)dispatch(fetchAsyncCart(currentUser._id));

  }, []);

  const handleModal = () => {
    setModalClass(!modalClass);
  };

  const handleSignOut = () => {
    window.location.reload();
    dispatch(logoutStart());
  }

  return (
    <nav className="navbar-area">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-right">
          <div className="cart-container">
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
            {
              Object.keys(products).length !== 0 &&
            <div className="cart-size">
              <span>{products.length}</span>
            </div>
            }
          </div>
          <div className="account-container" onClick={handleModal}>
            {currentUser ? (
              <div className="account-name-container">
                <span className="account-name">
                  {currentUser.name.charAt(0).toUpperCase()}
                </span>
              </div>
            ) : (
              <VscAccount />
            )}
            <div
              className={`${
                modalClass === true ? "display" : "hide"
              } account-options`}
            >
              <div className="triangle-up">
                <VscTriangleUp />
              </div>
              <div className="items-parent">
                {currentUser ? (
                  <span className="options" style = {{marginTop: 0}} onClick = {handleSignOut}>Sign out</span >
                ) : (
                  <>
                    <span className="options"><Link to="/form" state="signin">Sign in</Link></span>
                    <span className="options"><Link to="/form" state="signup">Sign up</Link></span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
