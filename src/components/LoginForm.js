import React, { useState } from "react";
import axios from "axios";
const LoginForm = ({ isloggedin, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandlePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickLogIn = (e) => {
    e.preventDefault();
    axios
      .post("http://13.209.193.142:7000/signup/check", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data);
        window.location.replace("/board");
        setIsLoggedIn(true);
      })

      .catch((error) => {
        alert(error.response);
      });
  };

  return (
    <div className="login-container-bottom">
      <form className="login">
        <div className="login-inputs">
          <label className="login-label">이메일</label>
          <input
            type="email"
            name="email"
            onChange={HandleEmail}
            value={email}
            className="login-input"
            placeholder="이메일을 입력하시오"
          />
        </div>
        <div className="login-inputs">
          <label className="login-label">비밀번호</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={HandlePassword}
            className="login-input"
            placeholder="비밀번호를 입력하시오"
          />
        </div>
        <button
          onClick={onClickLogIn}
          className="login-input-btn"
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
