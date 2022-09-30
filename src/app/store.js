import { configureStore } from "@reduxjs/toolkit";
// import homePageReducer from "../features/homePageSLice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import homePageSLice from "../features/homePageSLice";
const persistConfig = {
  key: "homePage",
  storage,
};
const reducers = combineReducers({ homePage: homePageSLice });
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
