import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { config } from "../config";
import Form from "../todo/Form";
import List from "../todo/List";
import { Navigate } from "react-router-dom";
import TodoDetail from "./TodoDetail";
import "./todo.css";
import { useDispatch } from "react-redux";
import { setToDoList } from "../Redux/Actions/changeToDoList";
import { setDetailItem } from "../Redux/Actions/changeDetailItemToShow";

const Todo = () => {
  const dispatch = useDispatch();
  const setTodoList = useCallback(
    (todoList) => dispatch(setToDoList(todoList)),
    [dispatch]
  );
  const setDetailTodo = useCallback(
    (detailItem) => dispatch(setDetailItem(detailItem)),
    [dispatch]
  );

  useEffect(() => {
    axios({
      method: "GET",
      url: `${config.api}/todos`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        setTodoList(res.data.data);
        setDetailTodo(res.data.data[0]);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="Todo-Top-Container">
      {(localStorage.getItem("access_token") == null ||
        localStorage.getItem("access_token") == undefined) && (
        <Navigate to="/auth" replace={true} />
      )}
      {/* <div className="Todo-col"> */}
      <div className="Todo-col-1">
        <Form></Form>
        <TodoDetail></TodoDetail>
      </div>
      <div className="Todo-col-2">
        <List></List>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Todo;
