import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDeleteReview } from '@/hooks/product_review/useDeleteReview';
import Header from '../modal_components/header/Header';
import styles from './DeleteReview.module.scss';
import { closeDeleteReviewModal } from '@/redux/reducers/reviewsSlice';

const DeleteReview = ({ product }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { showDeleteReviewModal } = useSelector((state) => state.reviews);
  const { deleteReview, loading } = useDeleteReview();

  const clickOutSide = (e) => {
    if (e.target.contains(containerRef.current))
      dispatch(closeDeleteReviewModal());
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
          closeModal={() => dispatch(closeDeleteReviewModal())}
        />

        <div className={styles.wrapper}>
          <h3>
            You are about to delete this review. This action is irreversible.
          </h3>
          <button disabled={loading} onClick={deleteReview}>
            Delete review
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteReview;
