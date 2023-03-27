import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    activeImageIndex: 0,
    showImageViewer: false,
    zoom: 1,
    zoomOrigin: `0px, 0px`,
    activeColor: null,
    sortReviews: '',
    filterReviews: '',
    searchReviews: '',
    showAddReview: false,
  },
  reducers: {
    handleActiveImageIndex: (state, action) => {
      state.activeImageIndex = action.payload;
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
    },
    decreaseActiveImageIndex: (state, action) => {
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
      const { num, max } = action.payload;
      if (num - 1 < 0) {
        state.activeImageIndex = max;
        return;
      }
      state.activeImageIndex = num - 1;
    },
    increaseActiveImageIndex: (state, action) => {
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
      const { num, max } = action.payload;
      if (num + 1 > max) {
        state.activeImageIndex = 0;
        return;
      }
      state.activeImageIndex = num + 1;
    },
    handleShowImageViewer: (state, action) => {
      const body = document.querySelector('body');
      if (action.payload === true) body.style.overflow = 'hidden';
      else body.style.overflow = 'visible';
      state.showImageViewer = action.payload;
      state.zoom = 1;
      state.zoomOrigin = `0px, 0px`;
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
    handleActiveColor: (state, action) => {
      if (!action.payload) {
        state.activeColor = 'no stock available';
        return;
      }
      state.activeColor = action.payload;
    },

    handleSortReviews: (state, action) => {
      state.sortReviews = action.payload;
    },
    handleFilterReviews: (state, action) => {
      state.filterReviews = action.payload;
    },
    handleSearchReviews: (state, action) => {
      state.searchReviews = action.payload;
    },
    handleShowAddReview: (state, action) => {
      const body = document.querySelector('body');
      if (action.payload === true) body.style.overflow = 'hidden';
      else body.style.overflow = 'visible';
      state.showAddReview = action.payload;
    },
  },
});

export default singleProductSlice.reducer;
export const {
  handleActiveImageIndex,
  increaseActiveImageIndex,
  decreaseActiveImageIndex,
  handleShowImageViewer,
  handleZoom,
  handleZoomOrigin,
  increaseZoom,
  decreaseZoom,
  resetZoom,
  handleActiveColor,
  handleSortReviews,
  handleFilterReviews,
  handleSearchReviews,
  handleShowAddReview,
} = singleProductSlice.actions;
