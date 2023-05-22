import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useAddQuestion = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const addQuestion = async (question, setShowAddQuestion, setQuestion) => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in' })
      );
      return;
    }
    if (!question.length) {
      dispatch(
        addNotification({ type: 'error', message: "Question can't be empty" })
      );
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/questions/${router.query.id}`;
    const data = { question };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.post(url, data, { headers });
      const resData = await response.data;

      if (response.data.error) {
        dispatch(addNotification({ type: 'error', message: resData.error }));
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: resData }));
      setShowAddQuestion(false);
      setQuestion('');
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { addQuestion, loading };
};
