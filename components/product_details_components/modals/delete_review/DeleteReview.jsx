import { useSelector, useDispatch } from 'react-redux';
import styles from './DeleteReview.module.scss';

const DeleteReview = () => {
  const dispatch = useDispatch();
  const { showDeleteReviewModal } = useSelector((state) => state.reviews);

  return (
    <div
      className={`${styles.delete_review} ${
        showDeleteReviewModal ? styles.active : null
      }`}
    >
      DeleteReview
    </div>
  );
};

export default DeleteReview;
