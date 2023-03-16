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
    decreaseActiveImageIndex: (state, action) => {
      const { num, max } = action.payload;
      if (num - 1 < 0) {
        state.activeImageIndex = max;
        return;
      }
      state.activeImageIndex = num - 1;
    },
    increaseActiveImageIndex: (state, action) => {
      const { num, max } = action.payload;
      if (num + 1 > max) {
        state.activeImageIndex = 0;
        return;
      }
      state.activeImageIndex = num + 1;
    },
    handleShowImageViewer: (state, action) => {
      state.showImageViewer = action.payload;
    },
  },
});

export default singleProductSlice.reducer;
export const {
  handleActiveImageIndex,
  increaseActiveImageIndex,
  decreaseActiveImageIndex,
  handleShowImageViewer,
} = singleProductSlice.actions;
