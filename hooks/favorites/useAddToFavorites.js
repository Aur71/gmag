import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useAddToFavorites = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [favoritesLoading, setFavoritesLoading] = useState(false);

  const addToFavorites = async (productId) => {
    localStorage.removeItem('favorites');
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in.' })
      );
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/favorites`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    const body = { _id: productId };
    setFavoritesLoading(true);
    try {
      const response = await axios.post(url, body, { headers });
      const data = await response.data;
      dispatch(addNotification({ type: 'success', message: data }));
      setFavoritesLoading(false);
    } catch (error) {
      dispatch(
        addNotification({ type: 'error', message: error.response.data.error })
      );
      setFavoritesLoading(false);
    }
  };

  return { addToFavorites, favoritesLoading };
};
