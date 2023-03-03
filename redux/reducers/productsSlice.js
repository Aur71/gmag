import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    totalProducts: 0,
    currentPage: 1,
    productsPerPage: 40,
    pages: 1,
    sortBy: 'the most popular',
    minPrice: null,
    maxPrice: null,
    rating: null,
    filters: [],
  },
  reducers: {
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
    handleProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload;
      state.pages = Math.ceil(state.totalProducts / action.payload);
      if (state.currentPage > state.pages) state.currentPage = state.pages;
    },
    handleSort: (state, action) => {
      state.sortBy = action.payload.toLowerCase();
    },
    setPrice: (state, action) => {
      const { min, max } = action.payload;
      state.minPrice = min;
      state.maxPrice = max;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    clearFilters: (state) => {
      const newState = JSON.parse(JSON.stringify(state.filters));
      newState.forEach((item) => {
        item.options.forEach((option) => {
          const target = document.getElementById(option);
          target.checked = false;
        });
      });

      state.filters = [];
    },

    addFilter: (state, action) => {
      const filterName = action.payload.name;
      const { optionName } = action.payload.option;

      const hasFilterName = state.filters.some(
        (obj) => obj.filterName === filterName
      );
      if (!hasFilterName) {
        const newFilter = { filterName, options: [optionName] };
        state.filters = [newFilter, ...state.filters];
        return;
      }
      const newState = JSON.parse(JSON.stringify(state.filters));
      const newFilters = newState.map((item) => {
        if (item.filterName === filterName) item.options.push(optionName);
        return item;
      });
      state.filters = newFilters;
    },
    removeFilter: (state, action) => {
      const filterName = action.payload.name;
      const { optionName } = action.payload.option;
      const newState = JSON.parse(JSON.stringify(state.filters));
      document.getElementById(optionName).checked = false;

      const newFilters = newState
        .map((item) => {
          if (item.filterName === filterName) {
            const newOptions = item.options.filter(
              (option) => option !== optionName
            );
            return { ...item, options: newOptions };
          }
          return item;
        })
        .filter((item) => item.options.length !== 0);

      state.filters = newFilters;
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
  setPrice,
  setRating,
  addFilter,
  removeFilter,
  clearFilters,
} = productsSlice.actions;
