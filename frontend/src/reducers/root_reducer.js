import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import modalReducer from "./modal_reducer";
import uiReducer from "./ui_reducer"

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  modal: modalReducer,
  ui: uiReducer
});

export default RootReducer;
