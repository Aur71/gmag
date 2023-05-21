import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './reducers/notificationsSlice';
import userReducer from './reducers/userSlice';
import layoutReducer from './reducers/layoutSlice';
import productFilteringSidebarReducer from './reducers/productFilteringSidebarSlice';
import ImageViewerReducer from './reducers/imageViewer';
import reviewsReducer from './reducers/reviewsSlice';
import favoritesReducer from './reducers/favoritesSlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    user: userReducer,
    layout: layoutReducer,
    productFilteringSidebar: productFilteringSidebarReducer,
    imageViewer: ImageViewerReducer,
    reviews: reviewsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export default store;
