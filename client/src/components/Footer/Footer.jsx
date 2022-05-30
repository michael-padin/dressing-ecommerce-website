import React from "react";
import "./Footer.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
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
                      <a href="#"><MdKeyboardArrowRight/>Home</a>
                    </li>
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Privacy Policy</a>
                    </li>
                  </ul>
                </h4>
              </div>
            </div>
            <div className="footer-items-container">
              <div className="footer-widget">
                <h4 className="widget-title">
                  Quick Links
                  <ul className="info-list">
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Home</a>
                    </li>
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Privacy Policy</a>
                    </li>
                  </ul>
                </h4>
              </div>
            </div>
            <div className="footer-items-container">
              <div className="footer-widget">
                <h4 className="widget-title">
                  Quick Links
                  <ul className="info-list">
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Home</a>
                    </li>
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#"><MdKeyboardArrowRight/>Privacy Policy</a>
                    </li>
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
