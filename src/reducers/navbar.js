import { NAVBAR_CHANGE_OPEN } from "../constants/actionTypes";

const initialState = {
  navOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_CHANGE_OPEN:
      return {
        ...state,
        navOpen:
          action.payload.navOpen !== undefined
            ? action.payload.navOpen
            : state.navOpen,
      };
    default:
      return state;
  }
};
