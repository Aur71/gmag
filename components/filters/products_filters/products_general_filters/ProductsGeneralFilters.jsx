import styles from './ProductsGeneralFilters.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openFilters } from '@/redux/reducers/layoutSlice';
import { FiChevronDown } from 'react-icons/fi';
import { sort, products } from '@/data/products-general-filters-options';

const ProductsGeneralFilters = () => {
  const dispatch = useDispatch();
  const [showSortBy, setShowSortBy] = useState(false);
  const [sortBy, setSortBy] = useState('The most popular');
  const [showProductsPerPage, setShowProductsPerPage] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState('60 per page');

  const openSortBy = () => {
    setShowProductsPerPage(false);
    setShowSortBy(!showSortBy);
  };

  const openProductsPerPage = () => {
    setShowSortBy(false);
    setShowProductsPerPage(!showProductsPerPage);
  };

  const handleSortBy = (name) => {
    setSortBy(name);
    // dispatch an action
  };

  const handleProductsPerPage = (name) => {
    setProductsPerPage(name);
    // dispatch an action
  };

  return (
    <div className={styles.products_general_filters}>
      <div
        className={`${styles.dropdown} ${showSortBy && styles.active}`}
        onClick={openSortBy}
      >
        <span>{sortBy}</span>
        <FiChevronDown />
        <ul className={styles.options}>
          {sort.map((option) => {
            return (
              <li key={option.id}>
                <button
                  onClick={() => handleSortBy(option.name)}
                  className={`${sortBy === option.name && styles.active}`}
                >
                  {option.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${styles.dropdown} ${showProductsPerPage && styles.active}`}
        onClick={openProductsPerPage}
      >
        <span>{productsPerPage}</span>
        <FiChevronDown />
        <ul className={styles.options}>
          {products.map((option) => {
            return (
              <li key={option.id}>
                <button
                  onClick={() => handleProductsPerPage(option.name)}
                  className={`${
                    productsPerPage === option.name && styles.active
                  }`}
                >
                  {option.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={() => dispatch(openFilters())}
        className={styles.show_filters_btn}
      >
        Filters
      </button>
    </div>
  );
};

export default ProductsGeneralFilters;
