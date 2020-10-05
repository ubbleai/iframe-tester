import { configureStore, Action } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReducer";
import { ThunkAction } from "redux-thunk";
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: rootReducer
});

// @ts-ignore
if (process.env.NODE_ENV !== 'production' && module.hot) {
  // @ts-ignore
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export const persistor = persistStore(store);

export default store;


export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
