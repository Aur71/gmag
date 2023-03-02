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
  addFilter,
  removeFilter,
  clearFilters,
} = productsSlice.actions;
