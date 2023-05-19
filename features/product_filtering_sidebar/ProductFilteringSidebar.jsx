import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import CloseSidebarBlock from './blocks/close_sidebar_block/CloseSidebarBlock';
import ActiveFiltersBlock from './blocks/active_filters_block/ActiveFiltersBlock';
import PriceBlock from './blocks/price_block/PriceBlock';
import RatingBlock from './blocks/rating_block/RatingBlock';
import SpecificationBlock from './blocks/specification_block/SpecificationBlock';
import styles from './ProductFilteringSidebar.module.scss';
import getAllFilters from './functions/getAllFilters';
import { clearFilters } from '@/redux/reducers/productFilteringSidebarSlice';

const ProductFilteringSidebar = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { showProductFilteringSidebar, activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );
  const filters = getAllFilters(products, activeFilters);

  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch, router.asPath]);

  return (
    <div
      className={`${styles.product_filtering_sidebar} ${
        showProductFilteringSidebar ? styles.active : null
      }`}
    >
      <CloseSidebarBlock />
      {activeFilters.length ? <ActiveFiltersBlock /> : null}

      {filters.map((filter) => {
        const { filterName } = filter;

        if (filterName === 'Price')
          return <PriceBlock key={filterName} filter={filter} />;
        if (filterName === 'Rating')
          return <RatingBlock key={filterName} filter={filter} />;
        return <SpecificationBlock key={filterName} filter={filter} />;
      })}
    </div>
  );
};

export default ProductFilteringSidebar;
