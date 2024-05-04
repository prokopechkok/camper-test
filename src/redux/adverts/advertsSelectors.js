// import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = (state) => state.adverts.adverts.adverts;
export const selectIsLoading = (state) => state.adverts.adverts.isLoading;
export const selectError = (state) => state.adverts.adverts.error;
export const selectFilters = (state) => state.adverts.filters;

// export const selectFilteredAdverts = createSelector(
//   [selectAdverts, selectFilters],
//   (adverts, filters) => {
//     return adverts.filter(({ name }) =>
//       name.toLowerCase().includes(filters.toLowerCase().trim())
//     );
//   }
// );
