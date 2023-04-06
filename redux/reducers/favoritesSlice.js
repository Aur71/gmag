import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    isLoading: false,
    error: null,
    products: [],
    sort: 'Newest',
    filter: 'All products',
    search: '',
  },
  reducers: {
    handleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    handleError: (state, action) => {
      state.error = action.payload;
    },
    handleProducts: (state, action) => {
      state.products = action.payload;
    },
    handleSort: (state, action) => {
      state.sort = action.payload;
    },
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
    removeProduct: (state, action) => {
      console.log(state, action.payload);
    },
  },
});

export default favoritesSlice.reducer;
export const {
  handleIsLoading,
  handleError,
  handleProducts,
  handleSort,
  handleFilter,
  handleSearch,
  removeProduct,
} = favoritesSlice.actions;
