import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducers/layoutSlice';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export default store;
