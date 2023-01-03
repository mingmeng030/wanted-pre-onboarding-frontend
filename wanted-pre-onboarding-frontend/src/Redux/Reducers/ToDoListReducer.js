import { TODOLIST } from "../Actions/changeToDoList";
import { UPDATELIST } from "../Actions/changeToDoList";

export const initialState = {
  todoList: [],
};

const ToDoListReducer = (state = initialState, action) => {
  if (action.type == TODOLIST) {
    state.todoList = action.payload;
    return {
      todoList: action.payload,
    };
  } else if (action.type == UPDATELIST) {
    let idx = 0;
    state.map((item, key) => {
      if (item.id == action.payload.id) idx = key;
    });
    console.log(state.todoList[idx]);
    state.todoList[idx] = action.payload;
    return {
      todoList: action.payload,
    };
  } else return initialState;
};
export default ToDoListReducer;
