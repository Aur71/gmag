import styles from './ProductsSidebarFilters.module.scss';
import { useState, useEffect } from 'react';
import ProductsFilterBlock from '../products_filter_block/ProductsFilterBlock';
import { findCommonProperties } from '@/utils/findCommonProperties';

const ProductsSidebarFilters = ({ data }) => {
  const [commonProps, setCommonProps] = useState([]);

  useEffect(() => {
    setCommonProps(findCommonProperties(data));
  }, [data]);

  return (
    <div className={styles.products_sidebar_filters}>
      {commonProps.map((filter, index) => {
        return <ProductsFilterBlock key={index} filter={filter} />;
      })}
    </div>
  );
};

export default ProductsSidebarFilters;
