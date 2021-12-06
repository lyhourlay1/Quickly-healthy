import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import TweetsReducer from "./tweets_reducer";

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tweets: TweetsReducer
});

export default RootReducer;
