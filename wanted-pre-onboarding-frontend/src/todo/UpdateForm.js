import React, { useState, useEffect, useCallback } from "react";
import { config } from "../config";
import axios from "axios";
import "./updateForm.css";

import { useSelector, useDispatch } from "react-redux";
import { setToDoList } from "../Redux/Actions/changeToDoList";

const UpdateForm = ({ todoItem, setUpdateMode }) => {
  const dispatch = useDispatch();
  const setTodoList = useCallback(
    (todoList) => dispatch(setToDoList(todoList)),
    [dispatch]
  );
  const todoList = useSelector((state) => state.ToDoListReducer.todoList);

  const [newTitle, setnewTitle] = useState(todoItem.title);
  const [newContent, setnewContent] = useState(todoItem.content);

  const handleTitle = (e) => {
    setnewTitle(e.target.value);
  };
  const handleContent = (e) => {
    setnewContent(e.target.value);
  };

  const updateCancelButton = () => {
    setUpdateMode(null);
  };

  const updateTodoButton = (e) => {
    e.preventDefault();

    const newData = {
      id: todoItem.id,
      createdAt: todoItem.createdAt,
      updatedAt: todoItem.updatedAt,
      title: newTitle,
      content: newContent,
    };

    axios({
      method: "PUT",
      url: `${config.api}/todos/${todoItem.id}`,
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      data: {
        title: newTitle,
        content: newContent,
      },
    }).then((res) => {
      //updateAction 추가
      setTodoList([...todoList, newData]);
      // setnewTitle(res.data.data.title);
      // setnewContent(res.data.data.content);
      setUpdateMode(null);
    });
  };

  return (
    <div className="Todo-UpdateForm-Container">
      <form id="todo-update-form">
        <input
          className="Todo-title-input-update"
          onChange={handleTitle}
          value={newTitle}
        />
        <textarea
          className="Todo-content-textarea-update"
          onChange={handleContent}
          value={newContent}
        ></textarea>
        <div className="Todo-Update-Form-Buttons">
          <button onClick={updateCancelButton}>back</button>
          <button onClick={updateTodoButton}>edit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
