import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useAddComment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const addComment = async (
    comment,
    reviewId,
    setShowAddComment,
    setComment
  ) => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in' })
      );
      return;
    }
    if (!comment.length) {
      dispatch(
        addNotification({
          type: 'error',
          message: "You can't add an empty comment",
        })
      );
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}/${reviewId}/comments`;
    const data = { content: comment };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.post(url, data, { headers });
      const res = await response.data;
      if (res.error) {
        dispatch(addNotification({ type: 'error', message: res.error }));
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: res }));
      setShowAddComment(false);
      setComment('');
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { addComment, loading };
};
