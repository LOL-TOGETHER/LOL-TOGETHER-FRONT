import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LOLTOGETHER <i className="fas fa-smile" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                홈
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                서비스
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/board" className="nav-links" onClick={closeMobileMenu}>
                게시판
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                로그인
              </Link>
            </li>
          </ul>
          <Link to="/log-in" className="btn-mobile">
            {button && <Button buttonStyle="btn--outline">로그인</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
