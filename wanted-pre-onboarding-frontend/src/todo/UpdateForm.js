import React, { useState, useEffect, useCallback } from "react";
import { config } from "../config";
import axios from "axios";
import "./updateForm.css";

import { useSelector, useDispatch } from "react-redux";
import { updateTodoList } from "../Redux/Actions/changeToDoList";

const UpdateForm = ({ todoItem, setUpdateMode }) => {
  const dispatch = useDispatch();

  const updateTodo = useCallback(
    (newTodo) => dispatch(updateTodoList(newTodo)),
    [dispatch]
  );

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
    })
      .then((res) => {
        return updateTodo(res.data.data);
      })
      .then((res) => {
        if (res) {
          setUpdateMode(null);
        } else {
          window.alert("수정 오류 발생");
        }
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
