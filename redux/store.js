import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducers/layoutSlice';
import productsReducer from './reducers/productsSlice';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    products: productsReducer,
  },
});

export default store;
