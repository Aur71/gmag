import { useState } from 'react';
import Sidebar from '@/components/products_components/sidebar/Sidebar';
import Filters from '@/components/products_components/filters/Filters';
import Products from '@/components/products_components/products/Products';
import styles from '../../../styles/pages/Products.module.scss';
import axios from 'axios';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const ProductType = ({ data }) => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

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

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/products/type/${params.type}`
    );
    const data = res.data;

    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};

export default ProductType;
