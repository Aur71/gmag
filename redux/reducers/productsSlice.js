import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsPerPage: 40,
    totalProducts: 0,
    pages: 1,
    currentPage: 1,
    sortBy: 'the most popular',
  },
  reducers: {
    handleProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload;
      const pages = Math.ceil(state.totalProducts / action.payload);
      state.pages = pages;
      if (state.currentPage > pages) state.currentPage = pages;
      if (state.currentPage < 1) state.currentPage = 1;
    },

    handleTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
      let pages = Math.ceil(action.payload / state.productsPerPage);
      if (!pages) pages = 1;
      state.pages = pages;
      if (state.currentPage > state.pages) state.currentPage = state.pages;
    },

    handleCurrentPage: (state, action) => {
      let page = action.payload;
      if (page <= 0) page = 1;
      if (page > state.pages) page = state.pages;
      state.currentPage = page;
      window.scrollTo(0, 0);
    },

    handleSort: (state, action) => {
      state.sortBy = action.payload.toLowerCase();
    },
  },
});

export default productsSlice.reducer;
export const {
  handleTotalProducts,
  handleCurrentPage,
  handleProductsPerPage,
  handleSort,
} = productsSlice.actions;
