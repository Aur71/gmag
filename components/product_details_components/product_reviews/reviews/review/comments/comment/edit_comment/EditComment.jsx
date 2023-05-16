import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './EditComment.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const EditComment = ({ comment, setShowEditComment, review }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleNewComment = (e) => {
    if (e.target.value.length <= 500) setNewComment(e.target.value);
  };

  useEffect(() => {
    setNewComment(comment.content);
  }, [comment]);

  const saveComment = async () => {
    if (!user) return;
    if (user._id !== comment.postedBy._id) return;

    const url = `https://gmag-backend.onrender.com/api/v1/reviews/${router.query.id}/${review._id}/comments/${comment._id}`;
    const data = { newComment };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    await axios
      .put(url, data, { headers })
      .then((response) => {
        if (response.data.error) {
          const notification = {
            type: 'error',
            message: response.data.error,
          };
          dispatch(addNotification(notification));
          return;
        }
        router.push(router.asPath);
        const notification = {
          type: 'success',
          message: response.data,
        };
        dispatch(addNotification(notification));
        setShowEditComment(false);
        setNewComment('');
        setLoading(false);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: error.message,
        };
        dispatch(addNotification(notification));
        setLoading(false);
      });
  };

  return (
    <div className={styles.edit_comment}>
      <textarea
        value={newComment}
        onChange={handleNewComment}
        placeholder='Add comment...'
      />

      <div className={styles.btn_container}>
        <button onClick={saveComment} disabled={loading}>
          Save
        </button>
        <button onClick={() => setShowEditComment(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditComment;
