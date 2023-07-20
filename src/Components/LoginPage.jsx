import React from "react";
import "./LoginPage.css";
import loginImage from "./LoginImage.jpg";
const LoginPage = () => {
  return (
    <div className="login-register">
    <div className="login">
      <div className="image">
        <img src={loginImage} alt="" />
      </div>
      <div className="form">
        <div className="form-title">
          <h1 className="header">Login</h1>
          <p className="para">Donec tortor quam at duis tortor.</p>
        </div>
        <div className="login-details">
          <div className="form-input">
            <label htmlFor="email">E-Mail</label>
            <div className="input">
              <input type="text" value="" placeholder="Placeholder content" />
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="email"> Password</label>
            <div className="input">
              <input
                type="password"
                value=""
                placeholder="Placeholder content"
              />
            </div>
          </div>
          <div className="forget-password">
            <p>Forgot password?</p>
          </div>
          <div className="button">
            <button type="button">Login</button>
          </div>
          <br />
          <span>or</span>
          <div className="button-one">
            <button type="button">Login</button>
          </div>
        </div>
      </div>
      <br />
    </div>
    </div>
  );
};

export default LoginPage;
