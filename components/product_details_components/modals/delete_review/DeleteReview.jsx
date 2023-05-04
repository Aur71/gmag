import { useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../modal_components/header/Header';
import axios from 'axios';
import styles from './DeleteReview.module.scss';
import { closeDeleteReviewModal } from '@/redux/reducers/reviewsSlice';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const DeleteReview = ({ product }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { showDeleteReviewModal, activeReview } = useSelector(
    (state) => state.reviews
  );
  const { user } = useSelector((state) => state.user);

  const clickOutSide = (e) => {
    if (e.target.contains(containerRef.current))
      dispatch(closeDeleteReviewModal());
  };

  const closeModal = useCallback(() => {
    dispatch(closeDeleteReviewModal());
    setLoading(false);
  }, [dispatch]);

  const submitModal = async () => {
    if (!user) {
      const notification = {
        type: 'error',
        message: 'You must be logged in.',
      };
      dispatch(addNotification(notification));
      return;
    }

    if (user._id === activeReview.postedBy._id) {
      const url = `http://localhost:3000/api/v1/reviews/${router.query.id}/${activeReview._id}`;
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
      setLoading(true);

      await axios
        .delete(url, { headers })
        .then((response) => {
          if (response.data.error) {
            const notification = {
              type: 'error',
              message: response.data.error,
            };
            dispatch(addNotification(notification));
            closeModal();
            return;
          }
          router.push(router.asPath);
          const notification = {
            type: 'success',
            message: response.data,
          };
          dispatch(addNotification(notification));
          closeModal();
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message: error.message,
          };
          dispatch(addNotification(notification));
          setLoading(false);
        });
    }
  };

  return (
    <div
      className={`${styles.delete_review} ${
        showDeleteReviewModal ? styles.active : null
      }`}
      onClick={clickOutSide}
    >
      <div className={styles.container} ref={containerRef}>
        <Header
          title='Delete review for:'
          product={product}
          closeModal={closeModal}
        />

        <div className={styles.wrapper}>
          <h3>
            You are about to delete this review. This action is irreversible.
          </h3>
          <button disabled={loading} onClick={submitModal}>
            Delete review
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteReview;
