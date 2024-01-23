import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import addYourProperty from "./addYourProperty";
import propertydetails from "./propertydetails";
import whatweprovide from "./whatweprovide";
import filterproperties from "./filterproperties";
import signUp from "./signUp";
import navbar from "./navbar";
import signIn from "./signIn";

export default combineReducers({
  addYourProperty,
  propertydetails,
  whatweprovide,
  filterproperties,
  navbar,
  signUp,
  signIn,
  router: routerReducer,
});
