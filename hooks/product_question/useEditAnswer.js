import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useEditAnswer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const editAnswer = async (answer, newAnswer, questionId, setShowEdit) => {
    if (!user || answer.postedBy._id !== user?._id) return;
    if (!newAnswer) {
      dispatch(
        addNotification({
          type: 'error',
          message: "Your answer can't be empty",
        })
      );
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/questions/${router.query.id}/${questionId}/answers/${answer._id}`;
    const data = { newAnswer };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.put(url, data, { headers });
      const resData = await response.data;
      if (resData.error) {
        dispatch(addNotification({ type: 'error', message: resData.error }));
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: resData }));
      setShowEdit(false);
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { editAnswer, loading };
};
