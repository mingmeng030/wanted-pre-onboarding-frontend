import React, { useState, useEffect } from "react";
import axios from "axios";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import { Navigate } from "react-router-dom";
import "./main.css";

const Main = () => {
  // 0 : signup   1: login
  const [displayState, setDisplayState] = useState(1);

  return (
    <div className="Main-Top-Container">
      {localStorage.getItem("access_token") && (
        <Navigate to="/" replace={true} />
      )}
      <div>
        {displayState ? <Login /> : <Signup />}
        {displayState ? (
          <button
            className="main-signup-button"
            onClick={() => setDisplayState(0)}
          >
            회원가입하려면 여기를 클릭하세요
          </button>
        ) : (
          <button
            className="main-login-button"
            onClick={() => setDisplayState(1)}
          >
            로그인하려면 여기를 클릭하세요
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
