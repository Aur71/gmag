import styles from './Stars.module.scss';
import { BsStarFill } from 'react-icons/bs';

const Stars = ({ stars, setStars, starsError }) => {
  return (
    <div className={styles.stars}>
      <button
        className={`${1 <= stars && styles.active}`}
        onClick={() => setStars(1)}
      >
        <BsStarFill />
      </button>
      <button
        className={`${2 <= stars && styles.active}`}
        onClick={() => setStars(2)}
      >
        <BsStarFill />
      </button>
      <button
        className={`${3 <= stars && styles.active}`}
        onClick={() => setStars(3)}
      >
        <BsStarFill />
      </button>
      <button
        className={`${4 <= stars && styles.active}`}
        onClick={() => setStars(4)}
      >
        <BsStarFill />
      </button>
      <button
        className={`${5 <= stars && styles.active}`}
        onClick={() => setStars(5)}
      >
        <BsStarFill />
      </button>

      <span className={starsError ? styles.error : null}>
        {!stars ? 'Add rating' : null}
        {stars === 1 ? 'Very bad' : null}
        {stars === 2 ? 'Bad' : null}
        {stars === 3 ? 'Decent' : null}
        {stars === 4 ? 'Good' : null}
        {stars === 5 ? 'Excellent' : null}
      </span>
    </div>
  );
};

export default Stars;
