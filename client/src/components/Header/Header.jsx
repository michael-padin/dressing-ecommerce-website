import React from "react";
import "./Header.scss";
import headerimg from "../../assets/headerImg.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-section">
        <h1 className="header-main-title">
          <span className="ex">TOP NEW WINTER</span> COLLECTION
        </h1>
        <p className="header-subtitle">MONTHLY OFFER</p>
        <div className="button-wrapper">
          <a href="">SHOP NOW</a>
        </div>
      </div>
      <div className="right-section">
        <div className="image-container">
          <img src={headerimg} alt="women-fashion" />
        </div>
      </div>
    </div>
  );
};

export default Header;
