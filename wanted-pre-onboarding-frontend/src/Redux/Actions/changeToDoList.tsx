import * as type from "../Types";

export const TODOLIST = "changeToDoList/TODOLIST" as const;
export const UPDATELIST = "changeToDoList/UPDATELIST" as const;
export const DELETELIST = "changeToDoList/DELETELIST" as const;

export const setToDoList = (todoList: type.todoItem[]) => ({
  type: TODOLIST,
  payload: todoList,
});

export const updateTodoList = (newTodo: type.todoItem) => ({
  type: UPDATELIST,
  payload: newTodo,
});
export const deleteTodoList = (deleteTodo: type.todoItem) => ({
  type: DELETELIST,
  payload: deleteTodo,
});
