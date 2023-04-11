import styles from './CloseFilters.module.scss';
import { useDispatch } from 'react-redux';
import { handleFilters } from '@/redux/reducers/layoutSlice';

const CloseFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.close_filters}>
      Filters
      <button onClick={() => dispatch(handleFilters())}>Show</button>
    </div>
  );
};

export default CloseFilters;
