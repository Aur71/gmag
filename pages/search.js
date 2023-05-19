import { useState } from 'react';
import ProductFilteringSidebar from '@/features/product_filtering_sidebar/ProductFilteringSidebar';
import SortContainer from '@/components/search_page_components/sort_container/SortContainer';
import CardContainer from '@/components/search_page_components/card_container/CardContainer';
import axios from 'axios';
import styles from '@/styles/pages/Search.module.scss';

const Search = ({ products }) => {
  const [sortBy, setSortBy] = useState('Most popular');

  return (
    <div className={styles.search_page}>
      <div className={styles.center}>
        <ProductFilteringSidebar products={products} />
        <SortContainer sortBy={sortBy} setSortBy={setSortBy} />
        <CardContainer products={products} sortBy={sortBy} />
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/api/v1/products/search?query=${query.q}`
    );
    const products = response.data;

    return { props: { products } };
  } catch (error) {
    return { props: { products: null } };
  }
};
