import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './layout/layoutSlice';

const store = configureStore({
  reducer: {
    layoutSlice: layoutReducer,
  },
});

export default store;
