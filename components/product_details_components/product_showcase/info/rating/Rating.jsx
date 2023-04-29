import styles from './Rating.module.scss';
import { BsStarFill } from 'react-icons/bs';

const Rating = ({ rating, reviewsCount }) => {
  return (
    <div className={styles.rating}>
      <BsStarFill
        className={`${styles.icon} ${1 <= rating && styles.active}`}
      />
      <BsStarFill
        className={`${styles.icon} ${2 <= rating && styles.active}`}
      />
      <BsStarFill
        className={`${styles.icon} ${3 <= rating && styles.active}`}
      />
      <BsStarFill
        className={`${styles.icon} ${4 <= rating && styles.active}`}
      />
      <BsStarFill
        className={`${styles.icon} ${5 <= rating && styles.active}`}
      />
      <p>{rating ? rating : 0}</p>
      <p>({reviewsCount ? reviewsCount : 0})</p>
    </div>
  );
};

export default Rating;
