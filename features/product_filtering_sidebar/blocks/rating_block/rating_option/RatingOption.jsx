import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './RatingOption.module.scss';
import { BsStarFill } from 'react-icons/bs';
import {
  addRatingFilter,
  removeRatingFilter,
} from '@/redux/reducers/productFilteringSidebarSlice';

const RatingOption = ({ option, filterName }) => {
  const dispatch = useDispatch();
  const { id, value, count } = option;

  const handleCheckbox = (e, option) => {
    if (e.target.checked) dispatch(addRatingFilter({ filterName, option }));
    if (!e.target.checked) dispatch(removeRatingFilter({ filterName, option }));
  };

  useEffect(() => {
    return () => {
      dispatch(removeRatingFilter({ filterName, option }));
    };
  }, [dispatch]);

  const checkboxId = `${id} - checkbox`;
  return (
    <div className={styles.rating_option}>
      <input
        type='checkbox'
        id={checkboxId}
        onChange={(e) => handleCheckbox(e, option)}
      />
      <BsStarFill className={`${styles.icon} ${value >= 1 && styles.active}`} />
      <BsStarFill className={`${styles.icon} ${value >= 2 && styles.active}`} />
      <BsStarFill className={`${styles.icon} ${value >= 3 && styles.active}`} />
      <BsStarFill className={`${styles.icon} ${value >= 4 && styles.active}`} />
      <BsStarFill className={`${styles.icon} ${value >= 5 && styles.active}`} />
      <span>({count})</span>
    </div>
  );
};

export default RatingOption;
