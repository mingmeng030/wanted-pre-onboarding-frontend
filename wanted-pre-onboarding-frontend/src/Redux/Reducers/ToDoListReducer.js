import { TODOLIST } from "../Actions/changeToDoList";

export const initialState = {
  todoList: [],
};

const ToDoListReducer = (state = initialState, action) => {
  // console.log(action.payload);
  if (action.type == TODOLIST) {
    state.todoList = action.payload;
    return {
      todoList: action.payload,
    };
  } else return initialState;
};
export default ToDoListReducer;
