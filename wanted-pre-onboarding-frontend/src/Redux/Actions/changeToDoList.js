export const TODOLIST = "changeToDoList/TODOLIST";
export const UPDATELIST = "changeToDoList/UPDATELIST";

export const setToDoList = (todoList) => ({
  type: TODOLIST,
  payload: todoList,
});

export const updateTodoList = (newTodo) => ({
  type: UPDATELIST,
  payload: newTodo,
});
