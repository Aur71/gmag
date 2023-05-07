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
  },
});

export default productFilteringSidebarSlice.reducer;
export const { openProductFilteringSidebar, closeProductFilteringSidebar } =
  productFilteringSidebarSlice.actions;
