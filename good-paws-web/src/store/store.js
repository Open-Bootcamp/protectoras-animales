import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { racesSlice } from "./racesSlice";
import { centersSlice } from "./centersSlice";

import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [racesSlice.name]: racesSlice.reducer,
      [centersSlice.name]: centersSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
