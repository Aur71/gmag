import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useEditQuestion = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const editQuestion = async (question, newQuestion, setShowEdit) => {
    if (!user) return setShowEdit(false);
    if (user._id !== question.postedBy._id) return setShowEdit(false);
    if (!newQuestion) {
      dispatch(
        addNotification({ type: 'error', message: "Question can't be empty" })
      );
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/questions/${router.query.id}/${question._id}`;
    const data = { newQuestion };
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

  return { editQuestion, loading };
};
