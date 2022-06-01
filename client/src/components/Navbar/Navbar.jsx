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
          <div className="cart-container"><Link to = "/cart"><AiOutlineShoppingCart/></Link></div>
          <div className="account-container">
            <VscAccount/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
