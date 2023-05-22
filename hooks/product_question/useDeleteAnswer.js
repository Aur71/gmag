import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useDeleteAnswer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const deleteAnswer = async (answer, questionId) => {
    if (!user || answer.postedBy._id !== user?._id) return;

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/questions/${router.query.id}/${questionId}/answers/${answer._id}`;
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
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: data }));
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { deleteAnswer, loading };
};
