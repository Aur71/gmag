import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoading: false,
    error: null,
    cart: [],
  },
  reducers: {
    handleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    handleError: (state, action) => {
      state.error = action.payload;
    },
    handleCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { handleCart, handleError, handleIsLoading } = cartSlice.actions;
