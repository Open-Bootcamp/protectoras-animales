import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";

import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
