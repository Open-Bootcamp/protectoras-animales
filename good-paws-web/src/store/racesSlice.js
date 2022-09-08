import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

export const getRaces = createAsyncThunk('@races/getRaces', async () => {
  return fetch(`${process.env.NEXT_PUBLIC_HOST}races`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
  }).then(rs => rs.json());
});

export const racesSlice = createSlice({
  name: "races",
  initialState: {
    loading: false,
    races: [],
    error: '',
  },
  extraReducers: {
    // [HYDRATE]: (state, action) => {
    //   return {
    //     ...state,
    //     ...action.payload.races,
    //   };
    // },
    [getRaces.pending]: (state) => {
      state.loading = true;
    },
    [getRaces.fulfilled]: (state, action) => {
      state.loading = false;
      state.races = action.payload;
      state.error = ''
    },
    [getRaces.rejected]: (state, action) => {
      state.loading = false;
      state.races = [];
      state.error = action.error.message
    },
  },
});

export default racesSlice.reducer;
