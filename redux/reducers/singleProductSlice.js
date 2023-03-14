import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    activeImageIndex: 0,
    showImageViewer: false,
  },
  reducers: {
    handleActiveImageIndex: (state, action) => {
      state.activeImageIndex = action.payload;
    },
    handleShowImageViewer: (state, action) => {
      state.showImageViewer = action.payload;
    },
  },
});

export default singleProductSlice.reducer;
export const { handleActiveImageIndex, handleShowImageViewer } =
  singleProductSlice.actions;
