import { createSlice } from '@reduxjs/toolkit';
import getFilters from '@/components/filters/products_filters/products_sidebar_filters/functions/getFilters';

const filtersSidebarSlice = createSlice({
  name: 'filtersSidebar',
  initialState: {
    allFilters: [],
    currentFilters: [],
    activeFilters: [],
    initialFilter: null,
    minPrice: null,
    maxPrice: null,
    rating: null,
  },
  reducers: {
    handleAllFilters: (state, action) => {
      const data = action.payload;
      state.allFilters = getFilters(data);
    },

    handlePrice: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },

    handleRating: (state, action) => {
      state.rating = action.payload;
    },

    addFilter: (state, action) => {
      const filterName = action.payload.name;
      const option = action.payload.option.optionName;

      //   CHEKS IF THE FILTER EXISTS
      const hasFilterName = state.activeFilters.some(
        (obj) => obj.filterName === filterName
      );

      //   IF IT DOSEN`T EXIST WE CREATE A NEW FILTER THAT IS ADDED TO THE ARRAY
      if (!hasFilterName) {
        const newFilter = { filterName, options: [option] };
        state.activeFilters = [newFilter, ...state.activeFilters];
        return;
      }

      //   IF IT EXISTS WE GET THAT FILTER AND PUSH A NEW OPTION TO THE OPTIONS ARRAY
      const newStateActiveFilters = JSON.parse(
        JSON.stringify(state.activeFilters)
      );
      state.activeFilters = newStateActiveFilters.map((item) => {
        if (item.filterName === filterName) item.options.push(option);
        return item;
      });
    },

    removeFilter: (state, action) => {
      const filterName = action.payload.name;
      const option = action.payload.option.optionName;
      //   UNCHEKING THE CHECKBOX WHEN THE FILTER IS REMOVE. USEFULL IF YOU REMOVE THE FILTER FROM THE ACTIVE_FILTERS_BLOCK
      const id = `${filterName}_${option}`;
      document.getElementById(id).checked = false;
      const newStateActiveFilters = JSON.parse(
        JSON.stringify(state.activeFilters)
      );
      state.activeFilters = newStateActiveFilters
        .map((filter) => {
          if (filter.filterName === filterName) {
            const newOptions = filter.options.filter((item) => item !== option);
            return { ...filter, options: newOptions };
          }
          return filter;
        })
        .filter((filter) => filter.options.length !== 0);
    },

    clearFilters: (state) => {
      const newStateActiveFilters = JSON.parse(
        JSON.stringify(state.activeFilters)
      );

      newStateActiveFilters.forEach((filter) => {
        const { filterName, options } = filter;
        options.forEach((option) => {
          const id = `${filterName}_${option}`;
          document.getElementById(id).checked = false;
        });
      });

      state.activeFilters = [];
    },
  },
});

export default filtersSidebarSlice.reducer;
export const {
  handleAllFilters,
  handlePrice,
  handleRating,
  addFilter,
  removeFilter,
  clearFilters,
} = filtersSidebarSlice.actions;
