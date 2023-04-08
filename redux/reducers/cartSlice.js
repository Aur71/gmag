import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoading: false,
    error: null,
    cart: [],
    productsCost: 0,
    deliveryCost: 0,
    totalCost: 0,
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
    addProduct: (state, action) => {
      console.log(state, action);
    },
    removeProduct: (state, action) => {
      console.log(state, action);
    },
    increaseCount: (state, action) => {
      console.log(state, action);
    },
    decreaseCount: (state, action) => {
      console.log(state, action);
    },

    updateTicket: (state) => {
      let productsCost = 0;
      let deliveryCost = 0;
      let totalCost = 0;

      state.cart.forEach((product) => {
        productsCost += product.currentPrice;
        totalCost = productsCost + deliveryCost;
      });

      state.productsCost = productsCost;
      state.deliveryCost = deliveryCost;
      state.totalCost = totalCost;
    },
  },
});

export default cartSlice.reducer;
export const {
  handleCart,
  handleError,
  handleIsLoading,
  addProduct,
  removeProduct,
  increaseCount,
  decreaseCount,
  updateTicket,
} = cartSlice.actions;
