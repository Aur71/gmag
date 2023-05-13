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
      console.log(action.payload);
    },
    removeSpecificationFilter: (state, action) => {
      console.log(action.payload);
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
