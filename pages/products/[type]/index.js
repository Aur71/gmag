import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsSidebarFilters from '@/components/products_page_components/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/products_page_components/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/products_page_components/products_container/ProductsContainer';
import ProductsPagination from '@/components/products_page_components/products_pagination/ProductsPagination.jsx/ProductsPagination';
import styles from '../../../styles/pages/Products.module.scss';
import { handleTotalProducts } from '@/redux/reducers/productsSlice';
// import axios from 'axios';

// TEMP DATA
import { computers } from '@/data/temp/computers';

const ProductType = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleTotalProducts(data.length));
  }, [data, dispatch]);

  if (!data.length) {
    return <h1>error</h1>;
  }

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <ProductsSidebarFilters data={data} />

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
