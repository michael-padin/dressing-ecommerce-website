import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { VscTriangleUp } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc'; 
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncCart } from "../../features/cartSlice.js";



const Navbar = () => {
  const dispatch = useDispatch();
  const {products, status} = useSelector((state) => state.cart)
  const {_id} = useSelector((state) => state.user.currentUser)
  const [modalClass , setModalClass  ] = useState(false);
  

  const handleModal =  () => {
    setModalClass(!modalClass);
  }

  return (
    <nav className="navbar-area">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/">
           <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li> <Link to ="/">Home</Link></li>
          {["/products",  "/about",  "/contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <Link to={`${item}`}>{item.slice(1)}</Link>
            </li>
          ))}
        </ul>
        <div className="navbar-right">
          <div className="cart-container">
            <Link to = "/cart"><AiOutlineShoppingCart/></Link>
            <div className="cart-size">
                <span>{products.length}</span>
            </div>
          </div>
          <div className="account-container" onClick = {handleModal} > 
            <VscAccount/>
            <div className={`${modalClass === true ? "display" : "hide"} account-options`}>
            <div className="triangle-up" >
              <VscTriangleUp/>
            </div>
            <div className = "items-parent"  >
                <span className="options"> <Link to =  "/form" state = "signin"> Sign in</Link></span>
                <span className="options"><Link to = "/form" state = "signup"> Sign up</Link></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
