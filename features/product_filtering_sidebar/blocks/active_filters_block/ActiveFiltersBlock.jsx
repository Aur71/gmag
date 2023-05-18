import { useSelector } from 'react-redux';
import BlockHeader from '../block_components/block_header/BlockHeader';
import ClearFiltersBtn from './clear_filters_btn/ClearFiltersBtn';
import ActivePriceFilter from './active_price_filter/ActivePriceFilter';
import ActiveRatingFilter from './active_rating_filter/ActiveRatingFilter';
import ActiveSpecificationFilter from './active_specification_filter/ActiveSpecificationFilter';
import styles from './ActiveFiltersBlock.module.scss';

const ActiveFiltersBlock = () => {
  const { activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );

  return (
    <div className={styles.active_filters_block}>
      <BlockHeader name='Active filters' dependencies={activeFilters} />

      <div className={styles.options}>
        <ClearFiltersBtn />
        <ActivePriceFilter />
        <ActiveRatingFilter />
        {activeFilters.map((activeFilter) => {
          const { filterName } = activeFilter;

          return (
            <ActiveSpecificationFilter
              key={filterName}
              activeFilter={activeFilter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ActiveFiltersBlock;
