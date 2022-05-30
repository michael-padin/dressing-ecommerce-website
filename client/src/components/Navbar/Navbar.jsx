import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar-area">
      <div className="container">
        <div className="logo-wrapper">
          <Link to="/home">
           <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="navbar-links">
          {["/home","/products",  "/about",  "/contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <Link to={`${item}`}>{item.slice(1)}</Link>
            </li>
          ))}
        </ul>
        <div className="navbar-right">
          <div className="cart-container"><AiOutlineShoppingCart/></div>
          <div className="account-container">
            <VscAccount/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
