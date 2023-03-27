import { useSelector, useDispatch } from 'react-redux';
import Header from './header/Header';
import ReviewForm from './review_form/ReviewForm';
import styles from './AddReview.module.scss';
import { handleShowAddReview } from '@/redux/reducers/singleProductSlice';

const AddReview = () => {
  const dispatch = useDispatch();
  const { showAddReview } = useSelector((state) => state.singleProduct);

  const closeAddReview = (e) => {
    if (e.target.classList[0] === 'AddReview_add_review__F3sya') {
      dispatch(handleShowAddReview(false));
      return;
    }
  };

  return (
    <section
      className={`${styles.add_review} ${showAddReview && styles.active}`}
      onClick={closeAddReview}
    >
      <div className={styles.container}>
        <Header />
        <ReviewForm />
      </div>
    </section>
  );
};

export default AddReview;
