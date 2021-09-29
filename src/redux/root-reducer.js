import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});
export default rootReducer;
