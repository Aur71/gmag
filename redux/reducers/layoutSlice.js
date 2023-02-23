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
    handleFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export default layoutSlice.reducer;
export const { handleSidebar, handleFilters } = layoutSlice.actions;
