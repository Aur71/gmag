import styles from '../../../styles/pages/Products.module.scss';
import axios from 'axios';
import ProductsSidebarFilters from '@/components/filters/products_filters/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/filters/products_filters/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/containers/products_container/ProductsContainer';
import ProductsPagination from '@/components/filters/products_filters/products_pagination/ProductsPagination.jsx/ProductsPagination';

// TEMP DATA
import { data } from '@/data/temp/computers';

const ProductType = ({ data }) => {
  if (!data.length) {
    return <h1>error</h1>;
  }

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <ProductsSidebarFilters data={computers} />

        <div className={styles.column}>
          <ProductsGeneralFilters />
          <ProductsContainer data={data} />
          <ProductsPagination />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    // FETCHING THE DATA BASED ON THE URL
    // const res = await axios.get(`api/products/${params.type}`);

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data;
    return { props: { data, params } };
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
