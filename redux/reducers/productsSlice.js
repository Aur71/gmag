import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    totalProducts: 0,
    currentPage: 1,
    productsPerPage: 40,
    pages: 1,
    sortBy: 'the most popular',
  },
  reducers: {
    handleTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    },
    handlePages: (state) => {
      state.pages = Math.ceil(state.totalProducts / state.productsPerPage);
    },
    handleCurrentPage: (state, action) => {
      let page = action.payload;
      if (page <= 0) page = 1;
      if (page > state.pages) page = state.pages;
      state.currentPage = page;
    },
    handleProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload;
      state.pages = Math.ceil(state.totalProducts / action.payload);
      state.currentPage = 1;
    },
    handleSort: (state, action) => {
      state.sortBy = action.payload.toLowerCase();
    },
  },
});

export default productsSlice.reducer;
export const {
  handleTotalProducts,
  handlePages,
  handleCurrentPage,
  handleProductsPerPage,
  handleSort,
} = productsSlice.actions;
