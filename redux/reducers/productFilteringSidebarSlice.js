import { createSlice } from '@reduxjs/toolkit';

const productFilteringSidebarSlice = createSlice({
  name: 'productFilteringSidebar',
  initialState: {
    showProductFilteringSidebar: false,
    activeFilters: [],
  },
  reducers: {
    openProductFilteringSidebar: (state) => {
      state.showProductFilteringSidebar = true;
    },
    closeProductFilteringSidebar: (state) => {
      state.showProductFilteringSidebar = false;
    },
    addSpecificationFilter: (state, action) => {
      const { optionName, filterName } = action.payload;

      const isFilterActive = state.activeFilters.some(
        (activeFilter) => activeFilter.filterName === filterName
      );

      if (!isFilterActive) {
        const newFilter = { filterName, options: [optionName] };
        state.activeFilters = [...state.activeFilters, newFilter];
      } else {
        state.activeFilters = state.activeFilters.map((filter) => {
          if (filter.filterName === filterName) filter.options.push(optionName);
          return filter;
        });
      }
    },
    removeSpecificationFilter: (state, action) => {
      const { optionName, filterName } = action.payload;
      document.getElementById(`${filterName} - ${optionName}`).checked = false;

      state.activeFilters = state.activeFilters.filter((activeFilter) => {
        if (activeFilter.filterName === filterName) {
          const newOptions = activeFilter.options.filter(
            (option) => option !== optionName
          );
          activeFilter.options = newOptions;
          if (!newOptions.length) return false;
        }
        return true;
      });
    },
    addPriceFilter: (state, action) => {
      console.log(action.payload);
    },
    removePriceFilter: (state, action) => {
      console.log(action.payload);
    },
    addRatingFilter: (state, action) => {
      console.log(action.payload);
    },
    removeRatingFilter: (state, action) => {
      console.log(action.payload);
    },
    clearFilters: (state) => {
      console.log(state);
    },
  },
});

export default productFilteringSidebarSlice.reducer;
export const {
  openProductFilteringSidebar,
  closeProductFilteringSidebar,
  addSpecificationFilter,
  removeSpecificationFilter,
  addPriceFilter,
  removePriceFilter,
  addRatingFilter,
  removeRatingFilter,
  clearFilters,
} = productFilteringSidebarSlice.actions;
