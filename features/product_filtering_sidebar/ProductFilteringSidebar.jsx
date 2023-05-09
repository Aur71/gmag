import styles from './ProductFilteringSidebar.module.scss';

const ProductFilteringSidebar = ({ products }) => {
  console.log(products);

  return (
    <div className={styles.product_filtering_sidebar}>
      ProductFilteringSidebar
    </div>
  );
};

export default ProductFilteringSidebar;
