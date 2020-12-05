import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import Button from "./Button";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const onClickBoard = () => {
    setClick(false);
    !isLoggedIn ? alert("로그인 후 이용 가능한 서비스입니다!") : <></>;
  };

  const onClickLogOut = () => {
    setClick(false);
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(token);
    }
    showButton();
  }, [setIsLoggedIn]);

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
            {isLoggedIn ? (
              <li className="nav-item">
                <Link
                  to="/mypage"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  마이페이지
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  회원가입
                </Link>
              </li>
            )}
            {isLoggedIn ? (
              <li className="nav-item">
                <Link
                  to="/board"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  게시판
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/log-in" className="nav-links" onClick={onClickBoard}>
                  게시판
                </Link>
              </li>
            )}
            {isLoggedIn ? (
              <li className="nav-item">
                <Link
                  to="/log-in"
                  className="nav-links-mobile"
                  onClick={onClickLogOut}
                >
                  로그아웃
                </Link>
              </li>
            ) : (
              <Link
                to="/log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                로그인
              </Link>
            )}
          </ul>
          {isLoggedIn ? (
            <Link to="/log-in" className="btn-mobile">
              {button && (
                <Button onClick={onClickLogOut} buttonStyle="btn--outline">
                  로그아웃
                </Button>
              )}
            </Link>
          ) : (
            <Link to="/log-in" className="btn-mobile">
              {button && <Button buttonStyle="btn--outline">로그인</Button>}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
