import styles from './ProductsSidebarFilters.module.scss';
import { useSelector } from 'react-redux';
import CloseFiltersBlock from './filter_blocks/close_filters_block/CloseFiltersBlock';
import ActiveFiltersBlock from './filter_blocks/active_filters_block/ActiveFiltersBlock';
import PriceBlock from './filter_blocks/price_block/PriceBlock';
import RatingBlock from './filter_blocks/rating_block/RatingBlock';
import FilterBlock from './filter_blocks/filter_block/FilterBlock';

const ProductsSidebarFilters = ({ filters }) => {
  const showFilters = useSelector((state) => state.layout.showFilters);

  return (
    <div
      className={`${styles.products_sidebar_filters} ${
        showFilters && styles.active
      }`}
    >
      <CloseFiltersBlock />
      <ActiveFiltersBlock />

      {filters.map((filter) => {
        const { name, options } = filter;

        if (name === 'price') {
          return <PriceBlock key='price block' name={name} options={options} />;
        }

        if (name === 'rating') {
          return (
            <RatingBlock key='rating block' name={name} options={options} />
          );
        }

        return <FilterBlock key={name} name={name} options={options} />;
      })}
    </div>
  );
};

export default ProductsSidebarFilters;
