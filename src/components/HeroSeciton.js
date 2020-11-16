import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

const HeroSeciton = () => {
  return (
    <div className="hero-container">
      <video src="/videos/loltogether.mp4" autoPlay loop muted />
      <h1>HAVE FUN WITH YOUR LOL MATE</h1>
      <p>망설일 필요 없어요!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          친구 구하기
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          트레일러 보기
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSeciton;
