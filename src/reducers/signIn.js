import { UPDATE_SIGNIN_INFO } from "../constants/actionTypes";

const initialState = {
  userType: 1,
  isLoading: false,
  email: "",
  password: "",
  formErrors: {
    email: "",
    password: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_INFO:
      return {
        ...state,
        userType: action.payload.userType
          ? action.payload.userType
          : state.userType,
        email:
          action.payload.email || action.payload.email === ""
            ? action.payload.email
            : state.email,
        password:
          action.payload.password || action.payload.payload === ""
            ? action.payload.password
            : state.password,
        isLoading:
          action.payload.isLoading !== undefined
            ? action.payload.isLoading
            : state.isLoading,
        formErrors: {
          email:
            action.payload.formErrors && action.payload.formErrors.email
              ? action.payload.formErrors.email
              : state.formErrors.email,
          password:
            action.payload.formErrors && action.payload.formErrors.password
              ? action.payload.formErrors.password
              : state.formErrors.password,
        },
      };
    default:
      return state;
  }
};
