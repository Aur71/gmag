import { useState } from 'react';
import ProductFilteringSidebar from '@/features/product_filtering_sidebar/ProductFilteringSidebar';
import SortContainer from '@/components/search_page_components/sort_container/SortContainer';
import CardContainer from '@/components/search_page_components/card_container/CardContainer';
import axios from 'axios';
import styles from '@/styles/pages/Search.module.scss';

// temp
import UnderDevelopment from '@/components/under_development/UnderDevelopment';

const Search = ({ products }) => {
  const underDevelopment = true;
  if (underDevelopment) return <UnderDevelopment />;

  const [sortBy, setSortBy] = useState('Most popular');

  return (
    <div className={styles.search_page}>
      <div className={styles.center}>
        <ProductFilteringSidebar products={products} />
        <SortContainer sortBy={sortBy} setSortBy={setSortBy} />
        <CardContainer products={products} />
      </div>
    </div>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/products/search?query=${query.q}`
    );
    const products = response.data;

    return { props: { products } };
  } catch (error) {
    return { props: { products: null } };
  }
};
