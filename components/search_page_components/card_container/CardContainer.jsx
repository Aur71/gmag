import { useState } from 'react';
import ProductCard2 from '@/components/cards/product_card_2/ProductCard2';
import Pagination from '@/features/pagination/Pagination';
import styles from './CardContainer.module.scss';

const CardContainer = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const lastProductIndex = currentPage * productsPerPage;
  const fistProductIndex = lastProductIndex - productsPerPage;
  const paginatedProducts = products.slice(fistProductIndex, lastProductIndex);

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
