import ProductCardResponseve from '@/components/cards/product_card_responseve/ProductCardResponseve';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './ProductsContainer.module.scss';
import filterByPrice from '@/components/filters/products_filters/products_sidebar_filters/functions/filterByPrice';
import filterByRating from '@/components/filters/products_filters/products_sidebar_filters/functions/filterByRating';
import filterByFilters from '@/components/filters/products_filters/products_sidebar_filters/functions/filterByFilters';
import sortData from '../../filters/products_filters/products_sidebar_filters/functions/sortData';
import { handleTotalProducts } from '@/redux/reducers/productsSlice';

const ProductsContainer = ({ data, layout }) => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, sortBy } = useSelector(
    (state) => state.products
  );
  const { minPrice, maxPrice, rating, activeFilters } = useSelector(
    (state) => state.filtersSidebar
  );

  const filteredByPrice = filterByPrice(data, minPrice, maxPrice);
  const filteredByRating = filterByRating(filteredByPrice, rating);
  const filteredByFilters = filterByFilters(filteredByRating, activeFilters);
  const sortedData = sortData(filteredByFilters, sortBy);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const paginatedData = sortedData.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    dispatch(handleTotalProducts(sortedData.length));
  }, [sortedData, dispatch]);

  return (
    <div
      className={`${styles.products_container} ${layout && styles.no_sidebar}`}
    >
      {paginatedData.map((item) => {
        return <ProductCardResponseve item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductsContainer;
