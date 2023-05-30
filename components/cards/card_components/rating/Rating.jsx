import styles from './Rating.module.scss';
import { AiFillStar } from 'react-icons/ai';

const Rating = ({ product }) => {
  const rating = product?.rating?.toFixed(0);
  const roundedRating = Math.round(rating);
  const reviewsCount = product.reviewsCount;

  return (
    <div className={styles.rating}>
      <AiFillStar className={1 <= roundedRating ? styles.star_clr : null} />
      <AiFillStar className={2 <= roundedRating ? styles.star_clr : null} />
      <AiFillStar className={3 <= roundedRating ? styles.star_clr : null} />
      <AiFillStar className={4 <= roundedRating ? styles.star_clr : null} />
      <AiFillStar className={5 <= roundedRating ? styles.star_clr : null} />
      <span>{rating}</span>
      <span>({reviewsCount})</span>
    </div>
  );
};

export default Rating;
