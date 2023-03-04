import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsSidebarFilters from '@/components/filters/products_filters/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/filters/products_filters/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/containers/products_container/ProductsContainer';
import ProductsPagination from '@/components/filters/products_filters/products_pagination/ProductsPagination.jsx/ProductsPagination';
import styles from '../../../styles/pages/Products.module.scss';
import { handleAllFilters } from '@/redux/reducers/filtersSidebarSlice';
import {
  handleTotalProducts,
  handlePages,
} from '@/redux/reducers/productsSlice';

// import axios from 'axios';

// TEMP DATA
import { computers } from '@/data/temp/computers';

const ProductType = ({ data }) => {
  const dispatch = useDispatch();
  const { allFilters } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(handleAllFilters(data));
    dispatch(handleTotalProducts(data.length));
    dispatch(handlePages());
  }, [data]);

  // if (!data.length) {
  //   return <h1>error</h1>;
  // }

  // if (!filters) {
  //   return (
  //     <div className={styles.products}>
  //       <div className={`${styles.center} ${styles.no_column}`}>
  //         <ProductsGeneralFilters />
  //         <ProductsContainer data={data} layout='no sidebar' />
  //         <ProductsPagination />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <ProductsSidebarFilters filters={allFilters} />

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

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default ProductType;
