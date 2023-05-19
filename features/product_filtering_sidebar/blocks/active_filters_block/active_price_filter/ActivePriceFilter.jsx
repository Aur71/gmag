import { useDispatch } from 'react-redux';
import styles from './ActivePriceFilter.module.scss';
import { IoIosClose } from 'react-icons/io';
import { removePriceFilter } from '@/redux/reducers/productFilteringSidebarSlice';

const ActivePriceFilter = ({ activeFilter }) => {
  const dispatch = useDispatch();
  const { filterName, min, max } = activeFilter;

  return (
    <div className={styles.active_price_filter}>
      <h4>{filterName}</h4>
      <button onClick={() => dispatch(removePriceFilter({ filterName }))}>
        <span>
          {min}$ - {max}$
        </span>
        <IoIosClose className={styles.icon} />
      </button>
    </div>
  );
};

export default ActivePriceFilter;
