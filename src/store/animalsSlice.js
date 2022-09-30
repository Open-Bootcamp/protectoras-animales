import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAnimals = createAsyncThunk('@animals/getAnimals', async ({ filters, initRegs, currentPage, userLocation }) => {
  return fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_ALL_PETS_URL}${initRegs}${process.env.NEXT_PUBLIC_ALL_PETS_PAGE}${currentPage <= 0 ? 1 : currentPage + 1}${filters.name && `&name=${filters.name}`}${filters.centerId && `&centerId=${filters.centerId}`}${filters.raceId && `&raceId=${filters.raceId}`}${filters.isShelter === "true" ? `&isShelter=${filters.isShelter}` : ''}${filters.isUrgent === "true" ? `&isUrgent=${filters.isUrgent}` : ''}${filters.isElder === "true" ? `&isElder=${filters.isElder}` : ''}${filters.canTravel === "true" ? `&canTravel=${filters.canTravel}` : ''}${filters.hasEspecialCondition === "true" ? `&hasEspecialCondition=${filters.hasEspecialCondition}` : ''}${filters.adultSize && `&adultSize=${filters.adultSize}`}${filters.radius > 0 ? `&coordinates=${userLocation[1]},${userLocation[0]}&radius=${filters.radius}` : ''}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
  }).then(rs => rs.json());
});

export const animalsSlice = createSlice({
  name: "animals",
  initialState: {
    loading: false,
    animals: [],
    error: '',
  },
  extraReducers: {
    [getAnimals.pending]: (state) => {
      state.loading = true;
    },
    [getAnimals.fulfilled]: (state, action) => {
      state.loading = false;
      state.animals = action.payload;
      state.error = ''
    },
    [getAnimals.rejected]: (state, action) => {
      state.loading = false;
      state.animals = [];
      state.error = action.error.message
    },
  },
});

export default animalsSlice.reducer;
