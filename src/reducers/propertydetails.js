import { PROPERTY_DETAILS_CHANGE_ACTIVE_ITEM } from "../constants/actionTypes";

const initialState = {
  activeItem: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROPERTY_DETAILS_CHANGE_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.payload.activeItem
          ? action.payload.activeItem
          : state.activeItem,
      };
    default:
      return state;
  }
};
