import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';
import { closeDeleteReviewModal } from '@/redux/reducers/reviewsSlice';

export const useDeleteReview = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { activeReview } = useSelector((state) => state.reviews);

  const deleteReview = async () => {
    if (!user) return;
    if (user._id !== activeReview.postedBy._id) return;

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}/${activeReview._id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.delete(url, { headers });
      const data = await response.data;

      if (data.error) {
        dispatch(addNotification({ type: 'error', message: data.error }));
        dispatch(closeDeleteReviewModal());
        setLoading(false);
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: data }));
      dispatch(closeDeleteReviewModal());
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { deleteReview, loading };
};
