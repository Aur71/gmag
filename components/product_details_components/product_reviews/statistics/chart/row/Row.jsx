import { useEffect, useRef } from 'react';
import styles from './Row.module.scss';

const Row = ({
  stars,
  starCount,
  reviewsCount,
  setFilterBy = { setFilterBy },
}) => {
  const percentBar = useRef(null);

  useEffect(() => {
    const width = (starCount / reviewsCount) * 100;
    percentBar.current.style.width = `${width}%`;
  }, [stars, starCount, reviewsCount]);

  return (
    <div className={styles.row}>
      <button
        onClick={() =>
          setFilterBy(`${stars} ${stars === 1 ? 'star' : 'stars'} reviews`)
        }
      >
        {stars} {stars === 1 ? 'star' : 'stars'}
      </button>

      <div className={styles.bar}>
        <div ref={percentBar}></div>
      </div>

      <button
        onClick={() =>
          setFilterBy(`${stars} ${stars === 1 ? 'star' : 'stars'} reviews`)
        }
      >
        ({starCount})
      </button>
    </div>
  );
};

export default Row;
