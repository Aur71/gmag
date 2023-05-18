import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useSubscribeToNewsLetter = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (name, email, setName, setEmail) => {
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/news-letter`;
    const data = { email, name };
    setIsLoading(true);

    await axios
      .post(url, data, {})
      .then((response) => {
        const notification = {
          type: 'success',
          message: response.data.success,
        };
        dispatch(addNotification(notification));
        setIsLoading(false);
        setName('');
        setEmail('');
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: error.response.data.error,
        };
        dispatch(addNotification(notification));
        setIsLoading(false);
      });
  };

  return { subscribe, isLoading };
};
