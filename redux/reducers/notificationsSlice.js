import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
      const notification = {
        id: uuidv4(),
        ...action.payload,
      };

      if (state.notifications.length < 5) {
        state.notifications = [...state.notifications, notification];
      }
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export default notificationsSlice.reducer;
export const { addNotification, removeNotification } =
  notificationsSlice.actions;
