import { useSelector } from 'react-redux';
import ActiveFiltersBlock from './blocks/active_filters_block/ActiveFiltersBlock';
import PriceBlock from './blocks/price_block/PriceBlock';
import RatingBlock from './blocks/rating_block/RatingBlock';
import SpecificationBlock from './blocks/specification_block/SpecificationBlock';
import styles from './ProductFilteringSidebar.module.scss';
import getAllFilters from './functions/getAllFilters';

const ProductFilteringSidebar = ({ products }) => {
  const { showProductFilteringSidebar, activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );
  const filters = getAllFilters(products, activeFilters);
  console.log(filters);

  return (
    <div
      className={`${styles.product_filtering_sidebar} ${
        showProductFilteringSidebar ? styles.active : null
      }`}
    >
      {activeFilters.length ? <ActiveFiltersBlock /> : null}

      <ActiveFiltersBlock />
      <PriceBlock />
      <RatingBlock />
      <SpecificationBlock />
    </div>
  );
};

export default ProductFilteringSidebar;
