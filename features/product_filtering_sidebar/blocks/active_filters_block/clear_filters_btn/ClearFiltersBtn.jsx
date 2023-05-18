import { useDispatch } from 'react-redux';
import styles from './ClearFiltersBtn.module.scss';
import { clearFilters } from '@/redux/reducers/productFilteringSidebarSlice';

const ClearFiltersBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.clear_filters_btn}>
      <button onClick={() => dispatch(clearFilters())}>Clear filters</button>
    </div>
  );
};

export default ClearFiltersBtn;
