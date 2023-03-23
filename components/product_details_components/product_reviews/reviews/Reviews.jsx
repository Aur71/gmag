import Review from './review/Review';
import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <Review />
    </div>
  );
};

export default Reviews;
