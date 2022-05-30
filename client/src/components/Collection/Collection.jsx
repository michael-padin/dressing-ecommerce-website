import React from "react";
import "./Collection.scss";
import collection1 from "../../assets/collection1.png";
import collection2 from "../../assets/collection2.png";

const Collection = () => {
  return (
    <div className="collection-wrapper">
      <div className="collection-container">
        <div className="collection-highlight">
          <div className="collection-sub-container">
            <div className="collection-item">
              <div className="img1-container">
                <a href="#"> 
                  <img src={collection1} alt="women" />
                </a>
              </div>
              <div className="info-box">
                <p className="catg">HOT ITEM</p>
                <h4 className="offer-title">BUY 1 GET 1</h4>
                <div className="btn-wrapper">
                  <a href="#">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>

          <div className="collection-sub-container">
            <div className="collection-item">
              <div className="img2-container">
                <a href="#">
                  <img src={collection2} alt="women fashion" />
                </a>
              </div>
              <div className="info-box">  
                <p className="catg">SALE ITEM</p>
                <h4 className="offer-title">UP TO 70% OFF</h4>
                <div className="btn-wrapper">
                  <a href="#">SHOP NOW</a>
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
