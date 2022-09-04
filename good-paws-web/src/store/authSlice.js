import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
  // Special case for next-redux-wrapper (NextJS)
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;
