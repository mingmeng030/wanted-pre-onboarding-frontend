import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailCondition, setEmailCondition] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);

  const emailRegex = /[\w\-\.]+\@[\w\-\.]+[/.][\w\-\.]+/g;

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value)) {
      setEmailCondition(true);
      console.log("email true");
    } else {
      setEmailCondition(false);
      console.log("email false");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordCondition(true);
      console.log("password true");
    } else {
      setPasswordCondition(false);
      console.log("password false");
    }
  };

  const onSubmitButtonClick = () => {
    axios({
      method: "POST",
      url: `${config.api}/users/login`,
      headers: {
        "Content-Type": `application/json`,
      },
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/");
      })
      .catch((err) => {
        window.alert("로그인에 실패했습니다.");
        navigate("/auth");
      });
  };

  return (
    <div className="Login-Top-Container">
      <p className="Login-Header">로그인</p>
      <div className="login inputContainer">
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
            className="login inputPassword"
            placeholder="비밀번호를 입력해주세요(8자리 이상)"
            onChange={handlePassword}
            type="password"
          />
        </p>
      </div>
      {emailCondition && passwordCondition && (
        <button
          type="button"
          className="loginButton"
          onClick={onSubmitButtonClick}
        >
          로그인
        </button>
      )}
    </div>
  );
};

export default Login;
