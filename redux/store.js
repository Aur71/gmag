import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './reducers/notificationsSlice';
import userReducer from './reducers/userSlice';
import layoutReducer from './reducers/layoutSlice';
import filtersSidebarReducer from './reducers/filtersSidebarSlice';
import singleProductReducer from './reducers/singleProductSlice';
import favoritesReducer from './reducers/favoritesSlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    user: userReducer,
    layout: layoutReducer,
    filtersSidebar: filtersSidebarReducer,
    singleProduct: singleProductReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export default store;
