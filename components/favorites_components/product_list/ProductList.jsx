import { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoritesCard from '@/components/cards/favorites_card/FavoritesCard';
import Pagination from '@/features/pagination/Pagination';
import styles from './ProductList.module.scss';
import sortProducts from './functions/sortProduct';
import filterProducts from './functions/filterProducts';
import searchProducts from './functions/searchProducts';

const ProductList = () => {
  const { activeListName, lists, sortBy, filterBy, searchTerm } = useSelector(
    (state) => state.favorites
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const lastProductIndex = currentPage * productsPerPage;
  const fistProductIndex = lastProductIndex - productsPerPage;
  const currentList = lists.find((list) => list.name === activeListName);
  const sortedProducts = sortProducts(currentList.products, sortBy);
  const filteredProducts = filterProducts(sortedProducts, filterBy);
  const searchedProducts = searchProducts(filteredProducts, searchTerm);
  const paginatedProducts = searchedProducts.slice(
    fistProductIndex,
    lastProductIndex
  );

  return (
    <div className={styles.product_list}>
      {paginatedProducts.map((product) => {
        console.log(product);
        return <FavoritesCard key={product._id} product={product} />;
      })}

      {searchedProducts.length > productsPerPage ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={searchedProducts.length}
          itemsPerPage={productsPerPage}
        />
      ) : null}
    </div>
  );
};

export default ProductList;
