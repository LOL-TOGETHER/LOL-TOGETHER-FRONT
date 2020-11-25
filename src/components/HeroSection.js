import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Button from "./Button";
import "./css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/loltogether.mp4" autoPlay loop muted />
      <h1>MAKE YOUR LOL MATE</h1>
      <p>망설일 필요 없어요!</p>
      <div className="hero-btns">
        <Link to="/sign-up" className="btn-mobile">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
