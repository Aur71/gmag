import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useAddLike = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [addLikeLoading, setAddLikeLoading] = useState(false);

  const addLike = async (review) => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in.' })
      );
      return;
    }

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}/${review._id}/likes`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setAddLikeLoading(true);

    try {
      const response = await axios.post(url, {}, { headers });
      const data = await response.data;
      if (data.error) {
        dispatch(
          addNotification({ type: 'error', message: response.data.error })
        );
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: response.data }));
      setAddLikeLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setAddLikeLoading(false);
    }
  };

  return { addLike, addLikeLoading };
};
