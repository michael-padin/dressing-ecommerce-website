import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { login, register } from "../../features/userSlice.js";
import "./Form.scss";

const Form = () => {
  const location = useLocation();
  const {state } = location
    const dispatch = useDispatch();
  const [formSignUpData, setFormSignUpData] = useState({ name: "", email:"", password: ""});
  const [formSignInData, setFormSignInData] = useState({email: "", password: ""})
  const [activeFilter, setActiveFilter] = useState("signin");

  useEffect(() => {
    if(state === 'signup'){
      setActiveFilter('signup')
    } else if (state === 'signin'){
      setActiveFilter('signin')
    }
  },[state])

  const handleActive = (item) => {setActiveFilter(item)};

  const handleSignInInput = (e) => {
    setFormSignInData({...formSignInData, [e.target.name]: e.target.value});
  }

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    dispatch(login({...formSignInData}));
    setFormSignInData({email: "", password: ""});
  }

  const handleSignUpInput = (e) => {
    setFormSignUpData({...formSignUpData, [e.target.name]: e.target.value});
    
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    dispatch(register({...formSignUpData}));
    setFormSignUpData({name: "",email: "", password: ""});
  }



  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="nav-tabs">
          <div className={`${activeFilter === "signin" ? "item-active" : ""}`} onClick={() => handleActive("signin")}>
            Sign In
          </div>
          <div className={`${activeFilter === "signup" ? "item-active" : ""}`} onClick={() => handleActive("signup")}>
            Sign Up
          </div>
        </div>
        {activeFilter === "signin" ? (
          <form onSubmit = {handleSignInSubmit}>
            <div className="form-login-container">
              <h1>Welcome back</h1>
              <p>Welcome back! Please enter your details</p>
              <div className="input-container">
                <div className="email-container">
                  <label htmlFor="login_email">Email <span>*</span></label>
                  <input 
                  onChange = {handleSignInInput} 
                  type="email" 
                  id="login_email" 
                  placeholder="Enter your email" 
                  name="email" 
                  required value = {formSignInData.email}/>
                </div>
                <div className="password-container">
  
                  <label htmlFor="log_password">Password <span>*</span></label>
                  <input 
                  onChange = {handleSignInInput} 
                  required name="password" 
                  type="password" 
                  id="login_password" 
                  placeholder="Enter your password"
                  value = {formSignInData.password}/>
                </div>
              </div>
              <button className="form-submit-button">Sign in</button>
              <div className="alternative-button">
                <p>Don't have an account? <span onClick={() => handleActive("signup")}>Sign up</span></p>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit = {handleSignUpSubmit}>
            <div className="form-signup-container">
              <h1>Welcome back</h1>
              <p>Welcome back! Please enter your details</p>
              <div className="input-container">
                <div className="email-container">
                  <label htmlFor="signup-fullname">Full Name <span>*</span></label>
                  <input  
                  onChange = {handleSignUpInput} 
                  value = {formSignUpData.name} 
                  type="text" 
                  id="sigup-fullname" 
                  placeholder="Enter your full name" 
                  required name="name"/>
                </div>
                <div className="fullname-container">
                  <label htmlFor="login_email">Email <span>*</span></label>
                  <input 
                  onChange = {handleSignUpInput} 
                  value = {formSignUpData.email} 
                  type="email" 
                  id="login_email"
                  placeholder="Enter your email" required name="email"/>
                </div>
                <div className="password-container">
                  <label htmlFor="log_password">  Password <span>*</span></label>
                  <input 
                  onChange = {handleSignUpInput}
                  value = {formSignUpData.password} 
                  name="password" 
                  type="password" 
                  id="login_password" 
                  placeholder="Enter your password" required/>
                </div>
              </div>
                <button className="form-submit-button">Sign up</button>

              <div className="alternative-button">
                <p>Already have an account? <span onClick={() => handleActive("signin")}>Sign in</span></p>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className="form-image-container"></div>
    </div>
  );
};

export default Form;
