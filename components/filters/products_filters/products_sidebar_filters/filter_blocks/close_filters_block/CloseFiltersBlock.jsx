import styles from './CloseFiltersBlock.module.scss';
import { useDispatch } from 'react-redux';
import { closeFilters } from '@/redux/reducers/layoutSlice';

const CloseFiltersBlock = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.close_filters_block}>
      25 products
      <button onClick={() => dispatch(closeFilters())}>Show</button>
    </div>
  );
};

export default CloseFiltersBlock;
