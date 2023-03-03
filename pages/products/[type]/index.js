import styles from '../../../styles/pages/Products.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import {
  handleTotalProducts,
  handlePages,
} from '@/redux/reducers/productsSlice';
// import axios from 'axios';
import ProductsSidebarFilters from '@/components/filters/products_filters/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/filters/products_filters/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/containers/products_container/ProductsContainer';
import ProductsPagination from '@/components/filters/products_filters/products_pagination/ProductsPagination.jsx/ProductsPagination';
import getFilters from '@/components/filters/products_filters/products_sidebar_filters/functions/getFilters';

// TEMP DATA
import { computers } from '@/data/temp/computers';

const ProductType = ({ data, filters }) => {
  const dispatch = useDispatch();

  const dispatchHandleTotalProducts = useCallback(() => {
    dispatch(handleTotalProducts(data.length));
  }, [data, dispatch]);

  const dispatchHandlePages = useCallback(() => {
    dispatch(handlePages());
  }, [dispatch]);

  useEffect(() => {
    dispatchHandleTotalProducts();
    dispatchHandlePages();
  }, [dispatchHandleTotalProducts, dispatchHandlePages]);

  if (!data.length) {
    return <h1>error</h1>;
  }

  if (!filters) {
    return (
      <div className={styles.products}>
        <div className={`${styles.center} ${styles.no_column}`}>
          <ProductsGeneralFilters />
          <ProductsContainer data={data} layout='no sidebar' />
          <ProductsPagination />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <ProductsSidebarFilters filters={filters} />

        <div className={styles.column}>
          <ProductsGeneralFilters />
          <ProductsContainer data={data} />
          <ProductsPagination />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    // FETCHING THE DATA BASED ON THE URL
    // const res = await axios.get(`api/products/${params.type}`);
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = computers;

    if (data.length < 5) {
      return { props: { data, filters: null } };
    }

    const filters = getFilters(data);
    return { props: { data, filters } };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default ProductType;
