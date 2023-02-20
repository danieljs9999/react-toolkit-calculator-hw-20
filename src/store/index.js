import { combineReducers, createStore } from "redux";
import { authSlice } from "./auth/authSlice";
import { calculateSlice } from "./calculator/calculatorSlice";

const rootReducer = combineReducers({
  [calculateSlice.name]: calculateSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer);
