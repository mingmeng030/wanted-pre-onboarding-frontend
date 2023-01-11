import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCondition, setEmailCondition] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);

  const emailRegex = /[\w\-\.]+\@[\w\-\.]+/g;

  const handleEmail = (e) => {
    setEmail(e.target.value);

    emailRegex.test(e.target.value)
      ? setEmailCondition(true)
      : setEmailCondition(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    e.target.value.length >= 8
      ? setPasswordCondition(true)
      : setPasswordCondition(false);
  };

  const onSubmitButtonClick = () => {
    axios({
      method: "POST",
      url: `${config.api}/users/create`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        window.alert("회원가입 완료!");
      })
      .catch((err) => {
        window.alert("회원가입에 실패했습니다.");
        navigate("/auth");
      });
  };

  return (
    <div className="Signup-Top-Container">
      <p className="Signup-Header">회원가입</p>
      <div className="Signup inputContainer">
        <p>
          <span className="login EmailHeader">🧑🏻‍💻</span>
          <input
            className="login inputEmail"
            placeholder="이메일 입력해주세요"
            onChange={handleEmail}
          />
        </p>
        <p>
          <span className="login PasswordHeader">🔒</span>
          <input
            className="Signup inputPassword"
            placeholder="비밀번호를 입력해주세요(8자리 이상)"
            onChange={handlePassword}
            type="password"
          />
        </p>
      </div>
      {emailCondition && passwordCondition && (
        <button className="signupButton" onClick={onSubmitButtonClick}>
          회원가입
        </button>
      )}
    </div>
  );
};

export default Signup;
