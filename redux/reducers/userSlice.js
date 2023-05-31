import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    SIGNUP: (state, action) => {
      state.user = action.payload;
    },
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export default userSlice.reducer;
export const { SIGNUP, LOGIN, LOGOUT } = userSlice.actions;
