import React from "react";
import { Link } from "react-router-dom";
import validate from "./ValidateForm";
import SignUpFunctions from "./SignupFunctions";
import "./css/Signup.css";

const SignUpForm = () => {
  const { values, errors, handleChange, handleSubmit } = SignUpFunctions(
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <div className="form-inputs">
          <label className="form-label">이메일</label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-input"
            placeholder="이메일을 입력하시오"
          />
        </div>
        {errors.email && <p>{errors.email}</p>}
        <div className="form-inputs">
          <label className="form-label">비밀번호</label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-input"
            placeholder="비밀번호를 입력하시오"
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <div className="form-inputs">
          <label className="form-label">비밀번호 확인</label>
          <input
            id="password2"
            type="password"
            value={values.password2}
            onChange={handleChange}
            name="password2"
            className="form-input"
            placeholder="비밀번호 확인"
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <div className="form-inputs">
          <label className="form-label">롤 닉네임</label>
          <input
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className="form-input"
            placeholder="닉네임을 입력하시오"
          />
        </div>
        {errors.username && <p>{errors.username}</p>}
        <button className="form-input-btn" type="submit">
          회원가입하기
        </button>
        <span className="form-input-login">
          이미 아이디가 있으신가요? 로그인 <Link to="/log-in">HERE</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;
