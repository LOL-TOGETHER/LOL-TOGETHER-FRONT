import { useState } from "react";
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
      await axios
        .post("http://13.209.193.142:7000/signup", {
          email: values.email,
          name: values.username,
          password: values.password,
        })
        .then(() => {
          alert(
            "회원가입이 완료되었습니다! 서비스 이용을 위해 로그인을 해주세요~"
          ).catch((error) => alert(error));
        });
      history.push("/log-in");
    } catch (error) {}
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
  };
};

export default SignupFunctions;
