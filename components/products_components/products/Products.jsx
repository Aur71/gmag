import { useSelector } from 'react-redux';
import Card from './card/Card';
import styles from './Products.module.scss';
import filterProducts from './filterProducts';
import sortProducts from './sortProducts';

const Products = ({ products, sortBy }) => {
  const { activeFilters } = useSelector((state) => state.filtersSidebar);
  const filteredProducts = filterProducts(products, activeFilters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  return (
    <section className={styles.products}>
      {sortedProducts.map((product) => {
        return <Card product={product} key={product.id} />;
      })}

      {/* PAGINATION HERE */}
    </section>
  );
};

export default Products;
