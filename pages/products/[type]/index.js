import styles from '../../../styles/pages/Products.module.scss';
import ProductsSidebarFilters from '@/components/filters/products_filters/products_sidebar_filters/ProductsSidebarFilters';
import ProductsGeneralFilters from '@/components/filters/products_filters/products_general_filters/ProductsGeneralFilters';
import ProductsContainer from '@/components/containers/products_container/ProductsContainer';
import ProductsPagination from '@/components/filters/products_filters/products_pagination/ProductsPagination.jsx/ProductsPagination';

import { computers } from '@/data/temp/computers';

const ProductType = ({ productData }) => {
  // temporary data
  const data = [...computers];

  console.log(productData);

  return (
    <div className={styles.products}>
      <div className={styles.center}>
        <ProductsSidebarFilters data={data} />

        <div className={styles.column}>
          <ProductsGeneralFilters />
          <ProductsContainer />
          <ProductsPagination />
        </div>
      </div>
    </div>
  );
};

ProductType.getInitialProps = async ({ query }) => {
  const { type } = query;
  const productData = [type];
  //   const productData = await fetchProductData(type);
  return { productData };
};

export default ProductType;
