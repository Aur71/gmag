import { useState } from 'react';
import ProductFilteringSidebar from '@/features/product_filtering_sidebar/ProductFilteringSidebar';
import SortContainer from '@/components/search_page_components/sort_container/SortContainer';
import CardContainer from '@/components/search_page_components/card_container/CardContainer';
import axios from 'axios';
import styles from '@/styles/pages/ProductType.module.scss';

const ProductType = ({ products }) => {
  const [sortBy, setSortBy] = useState('Most popular');

  return (
    <div className={styles.product_type_page}>
      <div className={styles.center}>
        <ProductFilteringSidebar products={products} />
        <SortContainer sortBy={sortBy} setSortBy={setSortBy} />
        <CardContainer products={products} sortBy={sortBy} />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API}/api/v1/products/types`
  );
  const types = res.data;
  const paths = types.map((type) => {
    return {
      params: { type: type.toString() },
    };
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/v1/products/type/${params.type}`
    );
    const products = res.data;
    return { props: { products }, revalidate: 120 };
  } catch (error) {
    return { props: { products: [] } };
  }
};

export default ProductType;
