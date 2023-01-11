import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { config } from "../config";

import { Navigate } from "react-router-dom";
import "./tododetail.css";

import UpdateForm from "./UpdateForm";
import { useSelector, useDispatch } from "react-redux";
import { setDetailItem } from "../Redux/Actions/changeDetailItemToShow";
import { deleteTodoList } from "../Redux/Actions/changeToDoList";

const TodoDetail = () => {
  const detailItem = useSelector((state) => state.DetailItemReducer.detailItem);

  const dispatch = useDispatch();

  const setDetailTodo = useCallback(
    (detailItem) => dispatch(setDetailItem(detailItem)),
    [dispatch]
  );

  const deleteFromList = useCallback(
    (deleteTodo) => dispatch(deleteTodoList(deleteTodo)),
    [dispatch]
  );
  const [updatemode, setUpdateMode] = useState(null);

  return (
    <div className="Todo-Detail-Top-Container">
      {updatemode == detailItem.id ? (
        <UpdateForm setUpdateMode={setUpdateMode}></UpdateForm>
      ) : (
        <div className="Todo-Detail-Container">
          <p className="Todo-Detail-Title">{detailItem.title}</p>
          <p className="Todo-Detail-Content">{detailItem.content}</p>
          <div className="Todo-Detail-Buttons">
            <button
              className="updateButton"
              onClick={() => {
                setUpdateMode(detailItem.id);
              }}
            >
              edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoDetail;
