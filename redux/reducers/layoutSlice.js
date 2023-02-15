import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    showSidebar: false,
  },
  reducers: {
    handleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export default layoutSlice.reducer;
export const { handleSidebar } = layoutSlice.actions;
