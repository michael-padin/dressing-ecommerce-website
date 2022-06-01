import React from "react";
import "./Collection.scss";
import collection1 from "../../assets/collection1.png";
import collection2 from "../../assets/collection2.png";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div className="collection-wrapper">
      <div className="collection-container">
        <div className="collection-highlight">
          <div className="collection-sub-container">
            <div className="collection-item">
              <div className="img1-container">
                  <img src={collection1} alt="women" />
              </div>
              <div className="info-box">
                <p className="catg">HOT ITEM</p>
                <h4 className="offer-title">BUY 1 GET 1</h4>
                <div className="btn-wrapper">
                  <Link to="/products">SHOP NOW</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-sub-container">
            <div className="collection-item">
              <div className="img2-container">
                  <img src={collection2} alt="women fashion" />
              </div>
              <div className="info-box">  
                <p className="catg">SALE ITEM</p>
                <h4 className="offer-title">UP TO 70% OFF</h4>
                <div className="btn-wrapper">
                  <Link to="/products">SHOP NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
