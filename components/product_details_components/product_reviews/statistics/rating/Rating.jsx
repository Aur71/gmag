import styles from './Rating.module.scss';
import { BsStarFill } from 'react-icons/bs';

const Rating = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <h3>{rating.toFixed(0)}</h3>
      <div className={styles.stars_container}>
        <BsStarFill
          className={`${styles.icon} ${
            1 <= Math.round(rating) ? styles.active : null
          }`}
        />
        <BsStarFill
          className={`${styles.icon} ${
            2 <= Math.round(rating) ? styles.active : null
          }`}
        />
        <BsStarFill
          className={`${styles.icon} ${
            3 <= Math.round(rating) ? styles.active : null
          }`}
        />
        <BsStarFill
          className={`${styles.icon} ${
            4 <= Math.round(rating) ? styles.active : null
          }`}
        />
        <BsStarFill
          className={`${styles.icon} ${
            5 <= Math.round(rating) ? styles.active : null
          }`}
        />
      </div>
    </div>
  );
};

export default Rating;
