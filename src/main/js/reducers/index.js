import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import ThreadsReducer from "./reducer_threads";

const rootReducer = combineReducers({
  threads: ThreadsReducer,
  form: formReducer
});

export default rootReducer;