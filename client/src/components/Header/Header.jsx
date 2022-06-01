import React from "react";
import "./Header.scss";
import headerimg from "../../assets/headerImg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="left-section">
          <h1 className="header-main-title">
            <span className="ex">TOP NEW WINTER</span> COLLECTION
          </h1>
          <p className="header-subtitle">MONTHLY OFFER</p>
          <div className="button-wrapper">
            <Link to = "/products">SHOP NOW</Link>
          </div>
        </div>
        <div className="right-section">
          <div className="image-container">
            <img src={headerimg} alt="women-fashion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
