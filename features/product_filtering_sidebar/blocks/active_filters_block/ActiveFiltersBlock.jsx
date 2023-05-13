import { useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import ClearFiltersBtn from './clear_filters_btn/ClearFiltersBtn';
import ActiveFilter from './active_filter/ActiveFilter';
import styles from './ActiveFiltersBlock.module.scss';

const ActiveFiltersBlock = () => {
  const { activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );

  return (
    <div className={styles.active_filters_block}>
      <BlockHeader name='Active filters' activeFilters={activeFilters} />

      <div className={styles.options}>
        <ClearFiltersBtn />
        <ActiveFilter />
      </div>
    </div>
  );
};

export default ActiveFiltersBlock;
