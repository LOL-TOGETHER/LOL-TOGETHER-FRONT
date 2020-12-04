import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupFunctions = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validate(values);
    setErrors(validateError);
    if (Object.keys(validateError).length !== 0) {
      e.preventDefault();
      return;
    }
    try {
      await axios.post("http://13.209.193.142:7000/signup", {
        email: values.email,
        name: values.username,
        password: values.password,
      });
      history.push("/log-in");
    } catch (error) {
      alert(error.response.message);
    }
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default SignupFunctions;
