export const SET_DETAILITEMTOSHOW =
  "changeDetailItemToShow/SET_DETAILITEMTOSHOW";

export const setDetailItem = (detailItem) => ({
  type: SET_DETAILITEMTOSHOW,
  payload: detailItem,
});
