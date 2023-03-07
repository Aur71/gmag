import ProductCardResponseve from '@/components/cards/product_card_responseve/ProductCardResponseve';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './ProductsContainer.module.scss';
import filterByFilters from '@/components/filters/products_filters/functions/filter_products/filterByActiveFilters';
import sortData from '@/components/filters/products_filters/functions/filter_products/sortData';
import { handleTotalProducts } from '@/redux/reducers/productsSlice';

const ProductsContainer = ({ data, layout }) => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, sortBy } = useSelector(
    (state) => state.products
  );
  const { activeFilters } = useSelector((state) => state.filtersSidebar);

  const filteredByFilters = filterByFilters(data, activeFilters);
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
