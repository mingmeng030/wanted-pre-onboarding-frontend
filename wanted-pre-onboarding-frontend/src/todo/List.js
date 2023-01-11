import React, { useState, useEffect, useCallback } from "react";
import { config } from "../config";
import axios from "axios";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { setDetailItem } from "../Redux/Actions/changeDetailItemToShow";
import { deleteTodoList } from "../Redux/Actions/changeToDoList";

const List = () => {
  const dispatch = useDispatch();

  const setDetailTodo = useCallback(
    (detailItem) => dispatch(setDetailItem(detailItem)),
    [dispatch]
  );

  const deleteFromList = useCallback(
    (deleteTodo) => dispatch(deleteTodoList(deleteTodo)),
    [dispatch]
  );
  const todoList = useSelector((state) => state.ToDoListReducer.todoList);

  const onDeleteButtonClicked = (item) => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios({
        method: "Delete",
        url: `${config.api}/todos/${item.id}`,
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => {
          return deleteFromList(item);
        })
        .then((res) => {
          if (res) {
            window.alert("삭제 완료!");
          } else {
            window.alert("삭제 오류 발생");
          }
        });
    } else {
      window.alert("삭제가 취소되었습니다.");
    }
  };
  return (
    <>
      <div className="Todo-List-container">
        <h1>Todo List</h1>
        <ul className="Todo-List-ul">
          {todoList.map((item, index) => (
            <li className="Todo-List-li">
              <div onClick={() => setDetailTodo(item)}>
                <span className="Todo-List-Title">{item.title}</span>
                <p className="Todo-List-Content">
                  <span>{item.content}</span>
                </p>
              </div>
              <div className="Todo-List-Buttons">
                <button
                  className="deleteButton"
                  onClick={() => {
                    onDeleteButtonClicked(item);
                  }}
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
