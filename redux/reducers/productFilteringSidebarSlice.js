import { createSlice } from '@reduxjs/toolkit';

const productFilteringSidebarSlice = createSlice({
  name: 'productFilteringSidebar',
  initialState: {
    showProductFilteringSidebar: false,
    activeFilters: [],
    isPriceFilterActive: false,
  },
  reducers: {
    openProductFilteringSidebar: (state) => {
      state.showProductFilteringSidebar = true;
      document.querySelector('body').style.overflowY = 'hidden';
    },
    closeProductFilteringSidebar: (state) => {
      state.showProductFilteringSidebar = false;
      document.querySelector('body').style.overflowY = 'auto';
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
      const { filterName } = action.payload;
      state.isPriceFilterActive = true;

      const isPriceFilterActive = state.activeFilters.some(
        (activeFilter) => activeFilter.filterName === filterName
      );

      if (!isPriceFilterActive) {
        state.activeFilters = [...state.activeFilters, action.payload];
      } else {
        state.activeFilters = state.activeFilters.map((filter) => {
          if (filter.filterName === filterName) {
            filter.min = action.payload.min;
            filter.max = action.payload.max;
          }
          return filter;
        });
      }
    },
    removePriceFilter: (state, action) => {
      const { filterName } = action.payload;
      state.isPriceFilterActive = false;

      state.activeFilters = state.activeFilters.filter(
        (activeFilter) => activeFilter.filterName !== filterName
      );
    },
    addRatingFilter: (state, action) => {
      const { filterName, option } = action.payload;

      const isRatingFilterActive = state.activeFilters.some(
        (activeFilter) => activeFilter.filterName === filterName
      );

      if (!isRatingFilterActive) {
        const newFilter = { filterName, options: [option] };
        state.activeFilters = [...state.activeFilters, newFilter];
      } else {
        state.activeFilters = state.activeFilters.map((filter) => {
          if (filter.filterName === filterName) filter.options.push(option);
          return filter;
        });
      }
    },
    removeRatingFilter: (state, action) => {
      const { filterName, option } = action.payload;
      const { id } = option;
      document.getElementById(`${id} - checkbox`).checked = false;

      state.activeFilters = state.activeFilters.filter((activeFilter) => {
        if (activeFilter.filterName === filterName) {
          const newOptions = activeFilter.options.filter(
            (option) => option.id !== id
          );
          activeFilter.options = newOptions;
          if (!newOptions.length) return false;
        }
        return true;
      });
    },
    clearFilters: (state) => {
      state.activeFilters.forEach((activeFilter) => {
        const { filterName } = activeFilter;

        if (filterName === 'Price') {
          state.isPriceFilterActive = false;
          return;
        }
        if (filterName === 'Rating') {
          activeFilter.options.forEach((option) => {
            const { id } = option;
            document.getElementById(`${id} - checkbox`).checked = false;
          });
          return;
        }

        activeFilter.options.forEach((option) => {
          document.getElementById(`${filterName} - ${option}`).checked = false;
        });
      });

      state.activeFilters = [];
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
