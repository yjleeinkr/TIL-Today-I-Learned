import { combineReducers } from "redux";
import { counter } from "./counter";
import { comment } from "./comment";

const rootReducer = combineReducers({
  counter,
  comment,
})

export default rootReducer