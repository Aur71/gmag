import styles from './ProductsContainer.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCardResponseve from '@/components/cards/product_card_responseve/ProductCardResponseve';
import filterByPrice from '@/components/filters/products_filters/products_sidebar_filters/functions/filterByPrice';
import filterByRating from '@/components/filters/products_filters/products_sidebar_filters/functions/filterByRating';
import filterByFilters from '@/components/filters/products_filters/products_sidebar_filters/functions/filterByFilters';
import sortData from '../../filters/products_filters/products_sidebar_filters/functions/sortData';
import {
  handleTotalProducts,
  handlePages,
} from '@/redux/reducers/productsSlice';

const ProductsContainer = ({ data, layout }) => {
  const dispatch = useDispatch();
  const {
    currentPage,
    productsPerPage,
    sortBy,
    filters,
    minPrice,
    maxPrice,
    rating,
  } = useSelector((state) => state.products);

  const filteredByPrice = filterByPrice(data, minPrice, maxPrice);
  const filteredByRating = filterByRating(filteredByPrice, rating);
  const filteredByFilters = filterByFilters(filteredByRating, filters);
  const sortedData = sortData(filteredByFilters, sortBy);

  useEffect(() => {
    dispatch(handleTotalProducts(sortedData.length));
    dispatch(handlePages());
  }, [sortedData, dispatch]);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const paginatedData = sortedData.slice(firstProductIndex, lastProductIndex);

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
