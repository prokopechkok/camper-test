import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

const handlePending = (state) => {
  state.adverts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.adverts.isLoading = false;
  state.adverts.error = action.payload;
};

const initialState = {
  adverts: {
    adverts: [],
    isLoading: false,
    error: null,
  },
  filters: [],
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.adverts.isLoading = false;
        state.adverts.error = null;
        state.adverts.adverts = action.payload;
      });
  },
});
export const { setFilters } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
