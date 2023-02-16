import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    showSidebar: false,
    showFilters: false,
  },
  reducers: {
    handleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    openFilters: (state) => {
      state.showFilters = true;
    },
    closeFilters: (state) => {
      state.showFilters = false;
    },
  },
});

export default layoutSlice.reducer;
export const { handleSidebar, openFilters, closeFilters } = layoutSlice.actions;
