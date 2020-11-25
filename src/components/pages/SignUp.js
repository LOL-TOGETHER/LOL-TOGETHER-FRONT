import React from "react";
import "../css/Signup.css";
import SignUpForm from "../SignUpForm";
import signupnami from "../../images/lolicon.png";

const SignUp = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src={signupnami} alt="signupnami" className="form-img" />
        </div>
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
