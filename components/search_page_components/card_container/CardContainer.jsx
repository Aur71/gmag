import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard2 from '@/components/cards/product_card_2/ProductCard2';
import Pagination from '@/features/pagination/Pagination';
import styles from './CardContainer.module.scss';
import filterProducts from '@/features/product_filtering_sidebar/functions/filterProducts';
import sortProducts from './functions/sortProduct';

const CardContainer = ({ products, sortBy }) => {
  const { activeFilters } = useSelector(
    (state) => state.productFilteringSidebar
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const lastProductIndex = currentPage * productsPerPage;
  const fistProductIndex = lastProductIndex - productsPerPage;
  const filteredProducts = filterProducts(products, activeFilters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  const paginatedProducts = sortedProducts.slice(
    fistProductIndex,
    lastProductIndex
  );

  return (
    <div className={styles.card_container}>
      <div className={styles.grid_container}>
        {paginatedProducts.map((product) => {
          return <ProductCard2 key={product._id} product={product} />;
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={products.length}
        itemsPerPage={productsPerPage}
      />
    </div>
  );
};

export default CardContainer;
