import React, { useState, useEffect } from "react";
import { config } from "../config";
import axios from "axios";
import "./updateForm.css";

const UpdateForm = ({ todoItem, setUpdateMode }) => {
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
    }).then((res) => {
      setnewTitle(res.data.data.title);
      setnewContent(res.data.data.content);
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
