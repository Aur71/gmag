import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducers/layoutSlice';

const store = configureStore({
  reducer: {
    layoutSlice: layoutReducer,
  },
});

export default store;
