import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNotification } from '@/redux/reducers/notificationsSlice';

export const useEditComment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const editComment = async (
    comment,
    review,
    newComment,
    setShowEditComment,
    setNewComment
  ) => {
    if (!user) return;
    if (user._id !== comment.postedBy._id) return;
    if (!newComment.length) {
      dispatch(
        addNotification({ type: 'error', message: "Comment can't be empty" })
      );
      return;
    }

    const url = `${process.env.NEXT_PUBLIC_API}/api/v1/reviews/${router.query.id}/${review._id}/comments/${comment._id}`;
    const data = { newComment };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    try {
      const response = await axios.put(url, data, { headers });
      const resData = await response.data;

      if (resData.error) {
        dispatch(
          addNotification({ type: 'error', message: response.data.error })
        );
        return;
      }
      router.push(router.asPath);
      dispatch(addNotification({ type: 'success', message: response.data }));
      setShowEditComment(false);
      setNewComment('');
      setLoading(false);
    } catch (error) {
      dispatch(addNotification({ type: 'error', message: error.message }));
      setLoading(false);
    }
  };

  return { editComment, loading };
};
