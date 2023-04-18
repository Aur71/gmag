import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    productsCost: 0,
    deliveryCost: 0,
    totalCost: 0,
  },
  reducers: {
    handleCart: (state, action) => {
      state.cart = action.payload;
    },
    addToCart: (state, action) => {
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
  addToCart,
  removeFromCart,
  updateTicket,
} = cartSlice.actions;
