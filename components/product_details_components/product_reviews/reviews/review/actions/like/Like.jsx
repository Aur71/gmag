import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styles from './Like.module.scss';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Like = ({ review }) => {
  const router = useRouter();
  const { likes } = review;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return setIsLiked(false);
    const isReviewLiked = likes.some((id) => id === user._id);
    if (!isReviewLiked) return setIsLiked(false);
    if (isReviewLiked) return setIsLiked(true);
  }, [likes, user]);

  const addLike = async () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }

    const url = `http://localhost:3000/api/v1/reviews/${router.query.id}/${review._id}/likes`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    setLoading(true);

    await axios
      .post(url, {}, { headers })
      .then((response) => {
        if (response.data.error) {
          const notification = {
            type: 'error',
            message: response.data.error,
          };
          dispatch(addNotification(notification));
          return;
        }
        //  router.push(router.asPath);
        //  const notification = {
        //    type: 'success',
        //    message: response.data,
        //  };
        //  dispatch(addNotification(notification));

        setLoading(false);
        console.log(response.data);
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

  const removeLike = async () => {};

  if (isLiked)
    return (
      <button className={styles.like} onClick={removeLike} disabled={loading}>
        <AiFillLike className={styles.icon} />
        <span>({likes.length})</span>
      </button>
    );

  return (
    <button className={styles.like} onClick={addLike} disabled={loading}>
      <AiOutlineLike className={styles.icon} />
      <span>({likes.length})</span>
    </button>
  );
};

export default Like;
