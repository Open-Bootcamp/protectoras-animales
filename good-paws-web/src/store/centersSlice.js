import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCenters = createAsyncThunk('@centers/getCenters', async () => {
  return fetch(`${process.env.NEXT_PUBLIC_HOST}centers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
  }).then(rs => rs.json());
});

export const centersSlice = createSlice({
  name: "centers",
  initialState: {
    loading: false,
    centers: [],
    error: '',
  },
  extraReducers: {
    [getCenters.pending]: (state) => {
      state.loading = true;
    },
    [getCenters.fulfilled]: (state, action) => {
      state.loading = false;
      state.centers = action.payload;
      state.error = ''
    },
    [getCenters.rejected]: (state, action) => {
      state.loading = false;
      state.centers = [];
      state.error = action.error.message
    },
  },
});

export default centersSlice.reducer;
