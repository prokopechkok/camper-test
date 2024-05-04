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
    // .addCase(addContact.pending, handlePending)
    // .addCase(addContact.rejected, handleRejected)
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.contacts.push(action.payload);
    // })
    // .addCase(deleteContact.pending, handlePending)
    // .addCase(deleteContact.rejected, handleRejected)
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.contacts = state.contacts.contacts.filter(
    //     (contact) => contact.id !== action.payload.id
    //   );
    // });
  },
});
export const { setFilters } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
