import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";

const rootReducer = {
  [api.reducerPath]: api.reducer,
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
