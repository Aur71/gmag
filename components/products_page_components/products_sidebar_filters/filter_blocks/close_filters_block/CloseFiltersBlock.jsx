import styles from './CloseFiltersBlock.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilters } from '@/redux/reducers/layoutSlice';

const CloseFiltersBlock = () => {
  const dispatch = useDispatch();
  const { totalProducts } = useSelector((state) => state.products);

  return (
    <div className={styles.close_filters_block}>
      {totalProducts} {`${totalProducts === 1 ? 'product' : 'products'}`}
      <button onClick={() => dispatch(handleFilters())}>Show</button>
    </div>
  );
};

export default CloseFiltersBlock;
