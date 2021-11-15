import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import user from "./user/reducer";

const combinedReducer = combineReducers({
  user
});

export default function configureStore(initialState) {
  const middlewares = [thunkMiddleware];

  return createStore(
    combinedReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
