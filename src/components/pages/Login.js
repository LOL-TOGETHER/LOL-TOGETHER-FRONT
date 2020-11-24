import React from "react";
import LoginForm from "../LoginForm";
import "../Login.css";
import signupnami from "../../images/lolicon.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-container-top">
        <img src={signupnami} alt="loginnami" className="login-img" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
