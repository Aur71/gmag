import { useDispatch } from 'react-redux';
import Header from '../components/header/Header';
import styles from './RatingFilter.module.scss';
import { BsStarFill } from 'react-icons/bs';
import {
  addRatingFilter,
  removeRatingFilter,
  addInitialFilter,
  removeInitialFilter,
} from '@/redux/reducers/filtersSidebarSlice';

const RatingFilter = ({ name, options }) => {
  const dispatch = useDispatch();
  const filter = { name, options };

  const handleCheckBox = (e) => {
    const value = Number(e.target.value);
    if (e.target.checked) {
      dispatch(addRatingFilter(value));
      dispatch(addInitialFilter(filter));
      return;
    }
    dispatch(removeRatingFilter(value));
    dispatch(removeInitialFilter(filter));
  };
  return (
    <div className={styles.rating_filter}>
      <Header name={name} />

      <div className={styles.options}>
        {options.map((item) => {
          const { count, id, value } = item;
          const inputId = `${value}_stars`;

          return (
            <div className={styles.option} key={id}>
              <input
                type='checkbox'
                value={value}
                onChange={handleCheckBox}
                id={inputId}
              />
              <div className={styles.stars_container}>
                <BsStarFill className={`${value >= 1 && styles.active_star}`} />
                <BsStarFill className={`${value >= 2 && styles.active_star}`} />
                <BsStarFill className={`${value >= 3 && styles.active_star}`} />
                <BsStarFill className={`${value >= 4 && styles.active_star}`} />
                <BsStarFill className={`${value >= 5 && styles.active_star}`} />
                <span>({count})</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingFilter;