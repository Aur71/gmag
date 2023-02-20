import styles from '../../../styles/pages/Products.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsSidebarFilters from '@/components/filters/products_filters/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/filters/products_filters/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/containers/products_container/ProductsContainer';
import ProductsPagination from '@/components/filters/products_filters/products_pagination/ProductsPagination.jsx/ProductsPagination';
import getFilters from '@/components/filters/products_filters/products_sidebar_filters/get_filters/getFilters';

// TEMP DATA
import { computers } from '@/data/temp/computers';

const ProductType = ({ data, filters }) => {
  if (!data.length) {
    return <h1>error</h1>;
  }

  if (!filters) {
    return (
      <div className={styles.products}>
        <div className={`${styles.center} ${styles.no_column}`}>
          <ProductsContainer data={computers} />
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
          <ProductsContainer data={computers} />
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

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data;

    if (data.length < 5) {
      return { props: { data, filters: null } };
    }

    const filters = getFilters(computers);
    return { props: { data, filters } };
  } catch (error) {
    return { props: { data: [] } };
  }
};

// export async function getStaticProps({ params }) {
//   try {
//     // FETCHING THE DATA BASED ON THE URL
//     // const res = await axios.get(`api/products/${params.type}`);

//     const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
//     const data = res.data;
//     return {
//       props: { data, params },
//       revalidate: 60,
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// }

export default ProductType;
