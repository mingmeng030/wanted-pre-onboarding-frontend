import * as type from "../Types";

export const SET_DETAILITEMTOSHOW =
  "changeDetailItemToShow/SET_DETAILITEMTOSHOW" as const;

export const setDetailItem = (detailItem: type.todoItem) => ({
  type: SET_DETAILITEMTOSHOW,
  payload: detailItem,
});
