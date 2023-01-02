import React, { useState, useEffect } from "react";
import { config } from "../config";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCondition, setEmailCondition] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);

  const emailRegex = /[\w\-\.]+\@[\w\-\.]+/g;

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
      url: `${config.api}/users/create`,
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      window.alert("회원가입 완료!");
    });
  };

  return (
    <div className="Signup-Top-Container">
      <p>회원가입</p>
      <div className="Signup-input">
        <p>
          이메일
          <input
            className="Signup-inputTitle"
            placeholder="이메일 입력해주세요"
            onChange={handleEmail}
          />
        </p>
        <p>
          비밀번호
          <input
            className="Signup-inputDescription"
            placeholder="비밀번호를 입력해주세요(8자리 이상)"
            onChange={handlePassword}
            type="password"
          />
        </p>
      </div>
      {emailCondition && passwordCondition && (
        <button onClick={onSubmitButtonClick}>회원가입</button>
      )}
    </div>
  );
};

export default Signup;
