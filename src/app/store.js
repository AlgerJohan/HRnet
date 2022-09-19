import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../features/homePageSLice";

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
});
