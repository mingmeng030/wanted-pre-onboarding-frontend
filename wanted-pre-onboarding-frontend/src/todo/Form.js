import React, { useState, useEffect } from "react";
import { config } from "../config";
import axios from "axios";
import "./form.css";

const Form = ({ todoList, setTodoList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTodoTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleTodoContent = (e) => {
    setContent(e.target.value);
  };

  const createTodoButton = () => {
    axios({
      method: "POST",
      url: `${config.api}/todos`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      data: {
        title: title,
        content: content,
      },
    }).then((res) => {
      setTodoList([...todoList, res.data]);
    });
  };
  return (
    <div className="Todo-Top-Container">
      <h1>Write down what your have to do 📌</h1>
      <form id="todo-create-form">
        <input
          className="Todo-title-input"
          placeholder="Wrtie title here"
          onChange={handleTodoTitle}
        />
        <textarea
          className="Todo-content-textarea"
          placeholder="Wrtie Content here"
          onChange={handleTodoContent}
        ></textarea>
        <button
          type="submit"
          className="createButton"
          onClick={createTodoButton}
        >
          add to list
        </button>
      </form>
    </div>
  );
};

export default Form;
