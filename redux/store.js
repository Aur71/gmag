import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './reducers/layoutSlice';
import productsReducer from './reducers/productsSlice';
import filtersSidebarReducer from './reducers/filtersSidebarSlice';
import singleProductReducer from './reducers/singleProductSlice';

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    products: productsReducer,
    filtersSidebar: filtersSidebarReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
