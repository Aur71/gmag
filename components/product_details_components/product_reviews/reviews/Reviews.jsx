import Review from './review/Review';
import styles from './Reviews.module.scss';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review, index) => {
        return <Review key={index} review={review} />;
      })}
    </div>
  );
};

export default Reviews;
