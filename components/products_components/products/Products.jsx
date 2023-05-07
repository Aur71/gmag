import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './card/Card';
import styles from './Products.module.scss';
import filterProducts from './filterProducts';
import sortProducts from './sortProducts';
import Pagination from '@/features/pagination/Pagination';

const Products = ({ products, sortBy }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const lastProductIndex = currentPage * productsPerPage;
  const fistProductIndex = lastProductIndex - productsPerPage;
  const { activeFilters } = useSelector((state) => state.filtersSidebar);
  const filteredProducts = filterProducts(products, activeFilters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  const paginatedProducts = sortedProducts.slice(
    fistProductIndex,
    lastProductIndex
  );

  return (
    <section className={styles.products}>
      {paginatedProducts.map((product) => {
        return <Card product={product} key={product._id} />;
      })}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={sortedProducts.length}
        itemsPerPage={productsPerPage}
      />
    </section>
  );
};

export default Products;
