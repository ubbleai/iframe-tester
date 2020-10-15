import { combineReducers } from "@reduxjs/toolkit";
import localforage from "localforage";
import { persistReducer } from "redux-persist";

import appSlice from "./app/app.slice";
import uiSlice from "./ui/ui.slice";

const rootReducer = combineReducers({
  app: persistReducer(
    { key: "app", storage: localforage, blacklist: ["logs"] },
    appSlice.reducer
  ),
  ui: persistReducer({ key: "ui", storage: localforage }, uiSlice.reducer),
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
