import React, { useState, useEffect } from "react";
import axios from "axios";

import { Navigate } from "react-router-dom";
import "./tododetail.css";

import { setDetailItem } from "../Redux/Actions/changeDetailItemToShow";
import { useSelector, useDispatch } from "react-redux";

const TodoDetail = () => {
  const detailItem = useSelector((state) => state.DetailItemReducer.detailItem);

  return (
    <div className="Todo-Detail-Top-Container">
      <div className="Todo-Detail-Container">
        <p className="Todo-Detail-Title">{detailItem.title}</p>
        <p className="Todo-Detail-Content">{detailItem.content}</p>
      </div>
    </div>
  );
};

export default TodoDetail;
