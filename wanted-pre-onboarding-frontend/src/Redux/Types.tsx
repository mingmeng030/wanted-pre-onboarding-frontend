import { setDetailItem } from "./Actions/changeDetailItemToShow";
import { setToDoList } from "./Actions/changeToDoList";
import { updateTodoList } from "./Actions/changeToDoList";
import { deleteTodoList } from "./Actions/changeToDoList";

export interface todoItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type TODOLIST = {
  todoList: Array<todoItem>;
};

export type changeDetailItemToShow = ReturnType<typeof setDetailItem>;

export type changeToDoList =
  | ReturnType<typeof setToDoList>
  | ReturnType<typeof updateTodoList>
  | ReturnType<typeof deleteTodoList>;
