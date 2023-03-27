import styles from './AddRating.module.scss';
import { BsStarFill } from 'react-icons/bs';

const AddRating = ({ rating, setRating, ratingError }) => {
  return (
    <div className={styles.add_rating}>
      <button
        className={`${1 <= rating && styles.active}`}
        onClick={() => setRating(1)}
      >
        <BsStarFill />
      </button>

      <button
        className={`${2 <= rating && styles.active}`}
        onClick={() => setRating(2)}
      >
        <BsStarFill />
      </button>

      <button
        className={`${3 <= rating && styles.active}`}
        onClick={() => setRating(3)}
      >
        <BsStarFill />
      </button>

      <button
        className={`${4 <= rating && styles.active}`}
        onClick={() => setRating(4)}
      >
        <BsStarFill />
      </button>

      <button
        className={`${5 <= rating && styles.active}`}
        onClick={() => setRating(5)}
      >
        <BsStarFill />
      </button>

      <span className={ratingError && styles.error}>
        {!rating ? 'Add rating' : null}
        {rating === 1 ? 'Very bad' : null}
        {rating === 2 ? 'Bad' : null}
        {rating === 3 ? 'Decent' : null}
        {rating === 4 ? 'Good' : null}
        {rating === 5 ? 'Excellent' : null}
      </span>
    </div>
  );
};

export default AddRating;
