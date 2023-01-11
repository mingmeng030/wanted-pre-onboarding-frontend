import React, { useState, useEffect, useCallback } from "react";
import { config } from "../config";
import axios from "axios";
import "./updateForm.css";

import { useSelector, useDispatch } from "react-redux";
import { updateTodoList } from "../Redux/Actions/changeToDoList";
import { setDetailItem } from "../Redux/Actions/changeDetailItemToShow";

const UpdateForm = ({ setUpdateMode }) => {
  const dispatch = useDispatch();

  const itemToUpdate = useSelector(
    (state) => state.DetailItemReducer.detailItem
  );

  const setDetailTodo = useCallback(
    (detailItem) => dispatch(setDetailItem(detailItem)),
    [dispatch]
  );

  const updateTodo = useCallback(
    (newTodo) => dispatch(updateTodoList(newTodo)),
    [dispatch]
  );

  const [newTitle, setnewTitle] = useState(itemToUpdate.title);
  const [newContent, setnewContent] = useState(itemToUpdate.content);

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
      url: `${config.api}/todos/${itemToUpdate.id}`,
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
        setDetailTodo(res.payload);
      })
      .then((res) => {
        setUpdateMode(null);
      })
      .catch((err) => {
        window.alert("수정에 실패했습니다.");
        console.log(err);
        setUpdateMode(null);
      });
  };

  return (
    <div className="Todo-UpdateForm-Container">
      <form className="todo-update-form">
        <h1>todo update</h1>
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
