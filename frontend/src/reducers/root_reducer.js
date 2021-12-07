import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import TweetsReducer from "./tweets_reducer";
import entitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tweets: TweetsReducer,
  entities: entitiesReducer
});

export default RootReducer;
