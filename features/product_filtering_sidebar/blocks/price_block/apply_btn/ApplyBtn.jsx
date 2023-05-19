import { useDispatch } from 'react-redux';
import styles from './ApplyBtn.module.scss';
import {
  addPriceFilter,
  removePriceFilter,
} from '@/redux/reducers/productFilteringSidebarSlice';

const ApplyBtn = ({ filter, min, max }) => {
  const dispatch = useDispatch();
  const { filterName, options } = filter;

  const dispatchAction = () => {
    if (min !== options.min || max !== options.max) {
      dispatch(addPriceFilter({ filterName, min, max }));
      return;
    }
    dispatch(removePriceFilter({ filterName }));
  };

  return (
    <button
      className={`${styles.apply_btn} ${
        min !== options.min || max !== options.max ? styles.active : null
      }`}
      onClick={dispatchAction}
    >
      Apply
    </button>
  );
};

export default ApplyBtn;
