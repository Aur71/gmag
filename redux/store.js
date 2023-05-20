import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './reducers/notificationsSlice';
import userReducer from './reducers/userSlice';
import layoutReducer from './reducers/layoutSlice';
import singleProductReducer from './reducers/singleProductSlice';
import favoritesReducer from './reducers/favoritesSlice';
import cartReducer from './reducers/cartSlice';
import reviewsReducer from './reducers/reviewsSlice';
import productFilteringSidebarReducer from './reducers/productFilteringSidebarSlice';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    user: userReducer,
    layout: layoutReducer,
    singleProduct: singleProductReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
    productFilteringSidebar: productFilteringSidebarReducer,
  },
});

export default store;
