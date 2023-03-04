import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducers/layoutSlice';
import productsReducer from './reducers/productsSlice';
import filtersSidebarReducer from './reducers/filtersSidebarSlice';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    products: productsReducer,
    filtersSidebar: filtersSidebarReducer,
  },
});

export default store;
