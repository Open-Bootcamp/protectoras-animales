import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";
import { racesSlice } from "./racesSlice";
import { centersSlice } from "./centersSlice";
import { animalsSlice } from "./animalsSlice";

import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [racesSlice.name]: racesSlice.reducer,
      [centersSlice.name]: centersSlice.reducer,
      [animalsSlice.name]: animalsSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
