import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Row.module.scss';
import { handleFilterReviews } from '@/redux/reducers/singleProductSlice';

const Row = ({ stars, starCount, reviewsCount }) => {
  const dispatch = useDispatch();
  const percentBar = useRef(null);

  useEffect(() => {
    const width = (starCount / reviewsCount) * 100;
    percentBar.current.style.width = `${width}%`;
  }, [stars, starCount, reviewsCount]);

  const dispatchFilter = () => {
    dispatch(
      handleFilterReviews(`${stars} ${stars === 1 ? 'star' : 'stars'} reviews`)
    );
  };

  return (
    <div className={styles.row}>
      <button onClick={dispatchFilter}>
        {stars} {stars === 1 ? 'star' : 'stars'}
      </button>

      <div className={styles.bar}>
        <div ref={percentBar}></div>
      </div>

      <button onClick={dispatchFilter}>({starCount})</button>
    </div>
  );
};

export default Row;
