import { useDispatch } from 'react-redux';
import { LOGOUT } from '@/redux/reducers/userSlice';
import { resetFavorites } from '@/redux/reducers/favoritesSlice';

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch(LOGOUT());
    dispatch(resetFavorites());
  };

  return { logout };
};
