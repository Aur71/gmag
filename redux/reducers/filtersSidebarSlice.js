import { createSlice } from '@reduxjs/toolkit';

const filtersSidebarSlice = createSlice({
  name: 'filtersSidebar',
  initialState: {
    activeFilters: [],
  },
  reducers: {
    //
    // HANDLEING PRICE FILTER
    //
    addPriceFilter: (state, action) => {
      const hasPriceFilter = state.activeFilters.some(
        (activeFilter) => activeFilter.filterName === 'Price'
      );

      // IF THERE IS NO PRICE FILTER WE ADD A NEW PRICE FILTER
      if (!hasPriceFilter) {
        const newPriceFilter = {
          filterName: 'Price',
          min: action.payload.min,
          max: action.payload.max,
        };

        state.activeFilters = [newPriceFilter, ...state.activeFilters];
        return;
      }

      // IF THERE IS A PRICE FILTER WE UPDATE IT
      const newStateActiveFilters = JSON.parse(
        JSON.stringify(state.activeFilters)
      );

      state.activeFilters = newStateActiveFilters.map((activeFilter) => {
        const { filterName } = activeFilter;
        if (filterName === 'Price') {
          activeFilter.min = action.payload.min;
          activeFilter.max = action.payload.max;
        }
        return activeFilter;
      });
    },

    removePriceFilter: (state, action) => {
      console.log(state, action);
    },

    //
    // HANDLEING RATING FILTER
    //
    addRatingFilter: (state, action) => {
      const hasRatingFilter = state.activeFilters.some(
        (activeFilter) => activeFilter.filterName === 'Rating'
      );

      if (!hasRatingFilter) {
        const newRatingFilter = {
          filterName: 'Rating',
          options: [action.payload],
        };
        state.activeFilters = [newRatingFilter, ...state.activeFilters];
        return;
      }

      console.log('add new option to the rating options array');
    },

    removeRatingFilter: (state, action) => {
      console.log(state, action);
    },

    //
    // HANDLEING A SPECIFICATION FILTER
    //
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
  addPriceFilter,
  removePriceFilter,
  addRatingFilter,
  removeRatingFilter,
  addFilter,
  removeFilter,
  clearFilters,
} = filtersSidebarSlice.actions;
