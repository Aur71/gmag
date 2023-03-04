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
      state.pages = Math.ceil(state.totalProducts / action.payload);
      if (state.currentPage > state.pages) state.currentPage = state.pages;
    },

    handleTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    },

    handlePages: (state) => {
      let pages = Math.ceil(state.totalProducts / state.productsPerPage);
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
  handlePages,
  handleCurrentPage,
  handleProductsPerPage,
  handleSort,
} = productsSlice.actions;
