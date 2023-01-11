import { combineReducers } from "redux";
import DetailItemReducer from "./DetailItemReducer";
import ToDoListReducer from "./ToDoListReducer";

const rootReducer = combineReducers({ DetailItemReducer, ToDoListReducer });

export default rootReducer;
