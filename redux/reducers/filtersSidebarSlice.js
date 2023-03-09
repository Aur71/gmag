import { createSlice } from '@reduxjs/toolkit';

const filtersSidebarSlice = createSlice({
  name: 'filtersSidebar',
  initialState: {
    activeFilters: [],
    // priceRage: { min: null, max: null },
    // activePriceRange: { min: null, max: null },
  },
  reducers: {
    // HANDLEING PRICE FILTER
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

    removePriceFilter: (state) => {
      state.activeFilters = state.activeFilters.filter(
        (activeFilter) => activeFilter.filterName !== 'Price'
      );
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
      // IF THERE IS ALREADY AN RATING FILTER ADD NEW VALUES TO THE OPTIONS ARRAY
      const newStateActiveFilters = JSON.parse(
        JSON.stringify(state.activeFilters)
      );

      state.activeFilters = newStateActiveFilters.map((activeFilter) => {
        const { filterName, options } = activeFilter;
        if (filterName === 'Rating') options.push(action.payload);
        return activeFilter;
      });
    },

    removeRatingFilter: (state, action) => {
      const value = action.payload;
      const inputId = `${value}_stars`;
      document.getElementById(inputId).checked = false;

      state.activeFilters = state.activeFilters
        .map((activeFilter) => {
          const { filterName, options } = activeFilter;
          if (filterName === 'Rating') {
            const newOptions = options.filter((option) => option != value);
            return { filterName, options: newOptions };
          }

          return activeFilter;
        })
        .filter((activeFilter) => {
          if (
            activeFilter.filterName === 'Rating' &&
            !activeFilter.options.length
          )
            return false;
          return true;
        });
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
        .filter((filter) => {
          if (filter.filterName === 'Price') return true;
          return filter.options.length;
        });
    },

    //
    // CLEARING ALL THE FILTERS
    //
    clearFilters: (state) => {
      const newStateActiveFilters = JSON.parse(
        JSON.stringify(state.activeFilters)
      );

      newStateActiveFilters.forEach((filter) => {
        if (filter.filterName === 'Price') return;

        if (filter.filterName === 'Rating') {
          document.getElementById('1_stars').checked = false;
          document.getElementById('2_stars').checked = false;
          document.getElementById('3_stars').checked = false;
          document.getElementById('4_stars').checked = false;
          document.getElementById('5_stars').checked = false;
          return;
        }

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
