import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useAddAnswer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const addAnswer = async (answer, questionId, setShowAddAnswer, setAnswer) => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in.' })
      );
      return;
    }
    if (!answer.length) {
      dispatch(
        addNotification({ type: 'error', message: "Answer can't be empty" })
      );
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/questions/${router.query.id}/${questionId}/answers`;
    const data = { answer };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.post(url, data, { headers });
      const resData = await response.data;

      if (resData.error) {
        dispatch(addNotification({ type: 'error', message: resData.error }));
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: resData }));
      setShowAddAnswer(false);
      setAnswer('');
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { addAnswer, loading };
};
