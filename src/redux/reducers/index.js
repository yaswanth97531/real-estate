import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Signup from "./RegReducer";

export default combineReducers({
  Auth,
  Signup
});
