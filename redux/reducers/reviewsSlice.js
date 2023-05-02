import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    showAddReviewModal: false,
    showEditReviewModal: false,
    showDeleteReviewModal: false,
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
    openEditReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.showEditReviewModal = true;
    },
    closeEditReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showEditReviewModal = false;
    },
    openDeleteReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'hidden';
      state.showDeleteReviewModal = true;
    },
    closeDeleteReviewModal: (state) => {
      document.querySelector('body').style.overflow = 'visible';
      state.showDeleteReviewModal = false;
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
