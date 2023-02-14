import { createSlice } from '@reduxjs/toolkit';

const layout = createSlice({
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

export default layout.reducer;
export const { handleSidebar } = layout.actions;
