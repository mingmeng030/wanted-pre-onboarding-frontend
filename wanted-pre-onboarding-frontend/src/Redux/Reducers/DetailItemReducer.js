import { SET_DETAILITEMTOSHOW } from "../Actions/changeDetailItemToShow";

export const initialState = {
  detailItem: { title: "", content: "" },
};

const DetailItemReducer = (state = initialState, action) => {
  if (action.type == SET_DETAILITEMTOSHOW) {
    state.detailItem = action.payload;
    return {
      detailItem: action.payload,
    };
  } else return initialState;
};

export default DetailItemReducer;
