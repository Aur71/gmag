import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './AddComment.module.scss';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const AddComment = ({ showAddComment, setShowAddComment, reviewId }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleComment = (e) => {
    if (e.target.value.length <= 500) setComment(e.target.value);
  };

  const addComment = async () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in',
      };
      dispatch(addNotification(notification));
      return;
    }
    if (!comment.length) {
      const notification = {
        type: 'error',
        message: "You can't add an empty comment",
      };
      dispatch(addNotification(notification));
      return;
    }

    const url = `https://gmag-backend.onrender.com/api/v1/reviews/${router.query.id}/${reviewId}/comments`;
    const data = { content: comment };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    await axios
      .post(url, data, { headers })
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
        setShowAddComment(false);
        setComment('');
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
    <div className={`${styles.add_comment} ${showAddComment && styles.active}`}>
      <div className={styles.textarea_container}>
        <textarea
          name='comment'
          id='comment'
          placeholder='Write a comment'
          value={comment}
          onChange={handleComment}
        />
        <span>{comment.length} / 500</span>
      </div>

      <div className={styles.btns_container}>
        <button onClick={addComment} disabled={loading}>
          Add comment
        </button>
        <button onClick={() => setShowAddComment(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddComment;
