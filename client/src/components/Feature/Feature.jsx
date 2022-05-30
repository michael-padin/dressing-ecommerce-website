import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { BsWallet2, BsShield } from "react-icons/bs";
import "./Feature.scss";

const Feature = () => {
  return (
    <div className="feature-area-wrapper">
      <div className="feature-container">
        <div className="sub-container">
          <div className="row">
            <ul className="feature-list">
              <li className="feature-item">
                <div className="icon-box">
                  <MdOutlineLocalShipping />
                </div>
                <div className="content">
                  <h4 className="title">Free shipping</h4>
                  <p className="info">Free Shipping on all online order</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="icon-box">
                  <BsHeadset />
                </div>
                <div className="content">
                  <h4 className="title">24/7 Support</h4>
                  <p className="info">Contact us 24 hours</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="icon-box">
                  <IoIosRocket />
                </div>
                <div className="content">
                  <h4 className="title">90 days return</h4>
                  <p className="info">If goods have damage issues</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="icon-box">
                  <BsWallet2 />
                </div>
                <div className="content">
                  <h4 className="title">100% Money Back</h4>
                  <p className="info">You have 15 days to Return</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="icon-box">
                  {" "}
                  <BsShield />
                </div>
                <div className="content">
                  <h4 className="title">Secure Payment</h4>
                  <p className="info">We Ensure Secure Transaction</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
