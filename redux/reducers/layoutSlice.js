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
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
    handleFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export default layoutSlice.reducer;
export const { handleSidebar, closeSidebar, handleFilters } =
  layoutSlice.actions;
