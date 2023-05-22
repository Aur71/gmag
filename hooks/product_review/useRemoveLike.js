import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useRemoveLike = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [removeLikeLoading, setRemoveLikeLoading] = useState(false);

  const removeLike = async (review) => {
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
    setRemoveLikeLoading(true);

    try {
      const response = await axios.delete(url, { headers });
      const data = await response.data;
      if (data.error) {
        dispatch(
          addNotification({ type: 'error', message: response.data.error })
        );
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: response.data }));
      setRemoveLikeLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setRemoveLikeLoading(false);
    }
  };

  return { removeLike, removeLikeLoading };
};
