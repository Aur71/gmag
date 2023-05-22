import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useEditReview = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeReview } = useSelector((state) => state.reviews);
  const [loading, setLoading] = useState(false);

  const editReview = async (stars, title, content, closeModal) => {
    if (!user) return closeModal();
    if (user._id !== activeReview.postedBy._id) return closeModal();

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}/${activeReview._id}`;
    const data = { stars, title, content };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.put(url, data, { headers });
      if (response.data.error) {
        dispatch(
          addNotification({ type: 'error', message: response.data.error })
        );
        closeModal();
        setLoading(false);
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: response.data }));
      closeModal();
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { editReview, loading };
};
