import * as type from "../Types";
import { SET_DETAILITEMTOSHOW } from "../Actions/changeDetailItemToShow";
import produce from "immer";
import { createReducer } from "typesafe-actions";

export const initialState: type.todoItem = {
  id: "",
  title: "",
  content: "",
  createdAt: "",
  updatedAt: "",
};

// const DetailItemReducer = (state = initialState, action) => {
//   if (action.type == SET_DETAILITEMTOSHOW) {
//     state = action.payload;
//     return {
//       detailItem: action.payload,
//     };
//   } else return initialState;
// };

//draft : 기존의 state, action : 새로운 action
const detailItem = createReducer<type.todoItem, type.changeDetailItemToShow>(
  initialState,
  {
    [SET_DETAILITEMTOSHOW]: (state, action) =>
      produce(state, (draft) => {
        draft = action.payload;
      }),
  }
);

export default detailItem;
