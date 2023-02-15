import styles from '../../../styles/pages/Products.module.scss';
import axios from 'axios';
import ProductsSidebarFilters from '@/components/filters/products_filters/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/filters/products_filters/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/containers/products_container/ProductsContainer';
import ProductsPagination from '@/components/filters/products_filters/products_pagination/ProductsPagination.jsx/ProductsPagination';

const ProductType = ({ data }) => {
  if (!data.length) {
    return <h1>error</h1>;
  }

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <ProductsSidebarFilters />

        <div className={styles.column}>
          <ProductsGeneralFilters />
          <ProductsContainer />
          <ProductsPagination />
        </div>
      </div>
    </div>
  );
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

export default ProductType;
