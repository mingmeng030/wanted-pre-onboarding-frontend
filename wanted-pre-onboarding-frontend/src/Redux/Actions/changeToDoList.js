export const TODOLIST = "changeToDoList/TODOLIST";

export const setToDoList = (todoList) => ({
  type: TODOLIST,
  payload: todoList,
});
