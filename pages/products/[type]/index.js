import { useState } from 'react';
import Sidebar from '@/components/products_components/sidebar/Sidebar';
import Filters from '@/components/products_components/filters/Filters';
import Products from '@/components/products_components/products/Products';
import styles from '../../../styles/pages/Products.module.scss';
// import axios from 'axios';

// TEMP DATA
import { computers } from '@/data/temporary/computers';

const ProductType = ({ data }) => {
  const [sortBy, setSortBy] = useState('Most popular');

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <Sidebar products={data} />
        <div className={styles.wrapper}>
          <Filters sortBy={sortBy} setSortBy={setSortBy} />
          <Products products={data} sortBy={sortBy} />
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
