import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    showAddReviewModal: false,
    showEditReviewModal: false,
    showDeleteReviewModal: false,
    activeReview: null,
  },
  reducers: {
    openAddReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.showAddReviewModal = true;
    },
    closeAddReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showAddReviewModal = false;
    },
    openEditReviewModal: (state, action) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.activeReview = action.payload;
      state.showEditReviewModal = true;
    },
    closeEditReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showEditReviewModal = false;
      state.activeReview = null;
    },
    openDeleteReviewModal: (state, action) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.activeReview = action.payload;
      state.showDeleteReviewModal = true;
    },
    closeDeleteReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showDeleteReviewModal = false;
      state.activeReview = null;
    },
  },
});

export default reviewsSlice.reducer;
export const {
  openAddReviewModal,
  closeAddReviewModal,
  openEditReviewModal,
  closeEditReviewModal,
  openDeleteReviewModal,
  closeDeleteReviewModal,
} = reviewsSlice.actions;
