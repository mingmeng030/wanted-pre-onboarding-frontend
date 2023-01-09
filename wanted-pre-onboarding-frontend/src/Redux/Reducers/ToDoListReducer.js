import { TODOLIST } from "../Actions/changeToDoList";
import { UPDATELIST } from "../Actions/changeToDoList";
import { DELETELIST } from "../Actions/changeToDoList";

export const initialState = {
  todoList: [],
  newTodo: {},
};

const ToDoListReducer = (state = initialState, action) => {
  if (action.type == TODOLIST) {
    state.todoList = action.payload;
    return {
      ...state,
      todoList: action.payload,
    };
  } else if (action.type == DELETELIST) {
    state.todoList.map((item, key) => {
      if (item.id == action.payload.id) {
        state.todoList.splice(key, 1);
      }
    });
    console.log(state);
    return state;
  } else if (action.type == UPDATELIST) {
    let idx = 0;
    state.todoList.map((item, key) => {
      if (item.id == action.payload.id) {
        idx = key;
      }
    });
    state.todoList[idx] = action.payload;
    return state;
  } else return state;
};

export default ToDoListReducer;
