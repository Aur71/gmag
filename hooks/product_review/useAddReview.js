import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';
import { closeAddReviewModal } from '@/redux/reducers/reviewsSlice';

export const useAddReview = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const addReview = async (
    stars,
    title,
    content,
    setStars,
    setTitle,
    setContent
  ) => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in.' })
      );
      return;
    }

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}`;
    const data = { stars, title, content };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.post(url, data, { headers });
      const resData = response.data;
      router.push(router.asPath);
      setStars(0);
      setTitle('');
      setContent('');
      dispatch(addNotification({ type: 'success', message: resData }));
      dispatch(closeAddReviewModal());
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { addReview, loading, setLoading };
};
