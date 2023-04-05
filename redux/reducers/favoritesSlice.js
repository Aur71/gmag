import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    sort: 'Newest',
    filter: 'All products',
    search: '',
  },
  reducers: {
    handleSort: (state, action) => {
      state.sort = action.payload;
    },
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default favoritesSlice.reducer;
export const { handleSort, handleFilter, handleSearch } =
  favoritesSlice.actions;
