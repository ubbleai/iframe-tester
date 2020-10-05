import { combineReducers } from "@reduxjs/toolkit";
import localforage from "localforage";

import appSlice from "./app/app.slice";
import uiSlice from "./ui/ui.slice";
import { persistReducer } from "redux-persist";
const rootReducer = combineReducers({
  app: appSlice.reducer,
  ui: persistReducer({ key: "ui", storage: localforage }, uiSlice.reducer)
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
