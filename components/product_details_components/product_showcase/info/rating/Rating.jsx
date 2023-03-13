import styles from './Rating.module.scss';
import { BsStarFill } from 'react-icons/bs';

const Rating = () => {
  const rating = 4.5;

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
      <p>{rating}</p>
      <p>(20)</p>
    </div>
  );
};

export default Rating;
