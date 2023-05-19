import { useDispatch } from 'react-redux';
import styles from './ActiveRatingFilter.module.scss';
import { IoIosClose } from 'react-icons/io';
import { removeRatingFilter } from '@/redux/reducers/productFilteringSidebarSlice';

const ActiveRatingFilter = ({ activeFilter }) => {
  const dispatch = useDispatch();
  const { filterName, options } = activeFilter;

  return (
    <div className={styles.active_rating_filter}>
      <h4>{filterName}</h4>

      <ul>
        {options.map((option) => {
          const { id } = option;

          return (
            <li key={id}>
              <button
                onClick={() =>
                  dispatch(removeRatingFilter({ filterName, option }))
                }
              >
                {id}
                <IoIosClose className={styles.icon} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ActiveRatingFilter;
