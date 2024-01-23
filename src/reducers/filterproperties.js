import { FILTER_PROPERTIES_CHANGE_SELECTED_SPAN } from "../constants/actionTypes";

const initialState = {
  selectedSpan: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PROPERTIES_CHANGE_SELECTED_SPAN:
      return {
        ...state,
        selectedSpan:
          action.payload.selectedSpan !== undefined
            ? action.payload.selectedSpan
            : state.selectedSpan,
      };
    default:
      return state;
  }
};
