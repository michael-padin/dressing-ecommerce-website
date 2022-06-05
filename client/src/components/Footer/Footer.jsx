import React from "react";
import "./Footer.scss";
import { MdKeyboardArrowRight, MdOutlinePlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-items-container">
              <div className="footer-widget">
                <h4 className="widget-title">
                  Quick Links
                  <ul className="info-list">
                    <li>
                      <Link to ="/"><MdKeyboardArrowRight/>Home</Link>
                    </li>
                    <li>
                      <Link to ="/products"><MdKeyboardArrowRight/>Products</Link>
                    </li>
                    <li>
                      <Link to ="/cart"><MdKeyboardArrowRight />Cart</Link>
                    </li>
                  </ul>
                </h4>
              </div>
            </div>
            <div className="footer-items-container">
              <div className="footer-widget">
                <h4 className="widget-title">
                  Store info
                  <ul className="info-list">
                    <li><MdOutlinePlace/>Cebu, Philippines</li>
                    <li><AiOutlinePhone/>+63908987547</li>
                    <li><AiOutlineMail/>padinmichael201@gmail.com</li>
                  </ul>
                </h4>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-container">
          <div className="bottom-content">
            <p>© {currentYear} All rights reserved by Michael</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
