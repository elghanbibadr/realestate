import { WHAT_WE_PROVIDE_CHANGE_AS_BUYER } from "../constants/actionTypes";

const initialState = {
  asBuyer: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WHAT_WE_PROVIDE_CHANGE_AS_BUYER:
      return {
        ...state,
        asBuyer:
          action.payload.asBuyer !== undefined
            ? action.payload.asBuyer
            : state.asBuyer,
      };
    default:
      return state;
  }
};
