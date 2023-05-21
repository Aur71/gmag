import { createSlice } from '@reduxjs/toolkit';

const imageViewerSlice = createSlice({
  name: 'imageViewer',
  initialState: {
    showImageViewer: false,
    activeIndex: 0,
    zoom: 1,
    zoomOrigin: `0px, 0px`,
  },
  reducers: {
    openImageViewer: (state) => {
      document.querySelector('body').overflow = 'hidden';
      state.showImageViewer = true;
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
    },
    closeImageViewer: (state) => {
      document.querySelector('body').overflow = 'visible';
      state.showImageViewer = false;
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
    },

    handleActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
    },
    decreaseIndex: (state, action) => {
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
      const { num, max } = action.payload;
      if (num - 1 < 0) {
        state.activeIndex = max;
        return;
      }
      state.activeIndex = num - 1;
    },
    increaseIndex: (state, action) => {
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
      const { num, max } = action.payload;
      if (num + 1 > max) {
        state.activeIndex = 0;
        return;
      }
      state.activeIndex = num + 1;
    },
    increaseZoom: (state) => {
      if (state.zoom + 0.5 >= 3) {
        state.zoom = 1;
        state.zoomOrigin = `0px, 0px`;
        return;
      }
      state.zoom = state.zoom + 0.5;
    },
    decreaseZoom: (state) => {
      if (state.zoom - 0.5 <= 1) {
        state.zoom = 1;
        state.zoomOrigin = `0px, 0px`;
        return;
      }
      state.zoom = state.zoom - 0.5;
    },
    resetZoom: (state) => {
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
    },
    handleZoomOrigin: (state, action) => {
      if (state.zoomOrigin === `0px, 0px`) {
        state.zoomOrigin = action.payload;
      }

      if (state.zoom >= 3) {
        state.zoom = 1;
        state.zoomOrigin = `0px, 0px`;
        return;
      }
      state.zoom = state.zoom + 0.5;
    },
  },
});

export default imageViewerSlice.reducer;
export const {
  openImageViewer,
  closeImageViewer,
  handleActiveIndex,
  decreaseIndex,
  increaseIndex,
  increaseZoom,
  decreaseZoom,
  resetZoom,
  handleZoomOrigin,
} = imageViewerSlice.actions;
