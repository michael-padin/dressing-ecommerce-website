import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [activeFilter, setActiveFilter] = useState("signin");
  const handleActive = (item) => {
    setActiveFilter(item);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="nav-tabs">
          <div
            className={`${activeFilter === "signin" ? "item-active" : ""}`}
            onClick={() => handleActive("signin")}
          >
            Sign In
          </div>
          <div
            className={`${activeFilter === "signup" ? "item-active" : ""}`}
            onClick={() => handleActive("signup")}
          >
            Sign Up
          </div>
        </div>
        {activeFilter === "signin" ? (
          <form action="">
            <div className="form-login-container">
              <h1>Welcome back</h1>
              <p>Welcome back! Please enter your details</p>
              <div className="input-container">
                <div className="email-container">
                  <label htmlFor="login_email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="login_email"
                    placeholder="Enter your email"
                    name="email"
                  />
                </div>
                <div className="password-container">
                  <label htmlFor="log_password">
                    Password <span>*</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="login_password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button className="form-submit-button">Sign in</button>
            </div>
          </form>
        ) : (
          <form action="">
            <div className="form-signup-container">
              <h1>Welcome back</h1>
              <p>Welcome back! Please enter your details</p>
              <div className="input-container">
                <div className="email-container">
                  <label htmlFor="signup-fullname">
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="sigup-fullname"
                    placeholder="Enter your full name"
                    required
                    name="fullname"
                  />
                </div>
                <div className="fullname-container">
                  <label htmlFor="login_email">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="login_email"
                    placeholder="Enter your email"
                    required
                    name="email"
                  />
                </div>
                <div className="password-container">
                  <label htmlFor="log_password">
                    Password <span>*</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="login_password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
                <button className="form-submit-button">Sign up</button>
            </div>
          </form>
        )}
      </div>
      <div className="form-image-container"></div>
    </div>
  );
};

export default Form;
