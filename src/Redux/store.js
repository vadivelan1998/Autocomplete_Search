import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({
  user: userReducer
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
