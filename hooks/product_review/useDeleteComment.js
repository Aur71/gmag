import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useDeleteComment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const deleteComment = async (comment, review) => {
    if (!user) return;
    if (user._id !== comment.postedBy._id) return;

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}/${review._id}/comments/${comment._id}`;
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

  return { deleteComment, loading };
};
