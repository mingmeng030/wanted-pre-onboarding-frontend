export const TODOLIST = "changeToDoList/TODOLIST";
export const UPDATELIST = "changeToDoList/UPDATELIST";
export const DELETELIST = "changeToDoList/DELETELIST";

export const setToDoList = (todoList) => ({
  type: TODOLIST,
  payload: todoList,
});

export const updateTodoList = (newTodo) => ({
  type: UPDATELIST,
  payload: newTodo,
});
export const deleteTodoList = (deleteTodo) => ({
  type: DELETELIST,
  payload: deleteTodo,
});
