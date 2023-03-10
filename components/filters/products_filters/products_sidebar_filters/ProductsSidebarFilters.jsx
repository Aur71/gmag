import { useSelector } from 'react-redux';
import CloseFiltersBlock from './filter_blocks/close_filters_block/CloseFiltersBlock';
import ActiveFiltersBlock from './filter_blocks/active_filters_block/ActiveFiltersBlock';
import PriceBlock from './filter_blocks/price_block/PriceBlock';
import RatingBlock from './filter_blocks/rating_block/RatingBlock';
import FilterBlock from './filter_blocks/filter_block/FilterBlock';
import styles from './ProductsSidebarFilters.module.scss';
import getSidebarFilters from '../functions/getSidebarFilters';

const ProductsSidebarFilters = ({ data }) => {
  const showFilters = useSelector((state) => state.layout.showFilters);
  const { activeFilters } = useSelector((state) => state.filtersSidebar);

  const filters = getSidebarFilters(activeFilters, data);

  return (
    <div
      className={`${styles.products_sidebar_filters} ${
        showFilters && styles.active
      }`}
    >
      <CloseFiltersBlock />
      {activeFilters.length ? <ActiveFiltersBlock /> : null}

      {filters.map((filter) => {
        const { name, options } = filter;
        const key = `${name}_block`;

        if (name === 'Price')
          return <PriceBlock key={key} name={name} options={options} />;

        if (name === 'Rating')
          return <RatingBlock key={key} name={name} options={options} />;

        return <FilterBlock key={key} name={name} options={options} />;
      })}
    </div>
  );
};

export default ProductsSidebarFilters;
