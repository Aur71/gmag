import { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from './favorite_card/FavoriteCard';
import styles from './ProductList.module.scss';
import sortItems from '../functions/sortProduct';
import filterItems from '../functions/filterProducts';
import searchItems from '../functions/searchProducts';
import Pagination from '@/features/pagination/Pagination';

const ProductList = () => {
  const {
    activeListName,
    lists,
    sortProducts,
    filterProducts,
    searchProducts,
  } = useSelector((state) => state.favorites);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const lastProductIndex = currentPage * productsPerPage;
  const fistProductIndex = lastProductIndex - productsPerPage;

  const currentList = lists.find((list) => list.listName === activeListName);
  const sortedProducts = sortItems(currentList.products, sortProducts);
  const filteredProducts = filterItems(sortedProducts, filterProducts);
  const searchedProducts = searchItems(filteredProducts, searchProducts);

  const paginatedProducts = searchedProducts.slice(
    fistProductIndex,
    lastProductIndex
  );

  return (
    <div className={styles.product_list}>
      {paginatedProducts.map((product, index) => {
        const key = `${currentList.listName}_${index}`;
        return <FavoriteCard product={product} key={key} />;
      })}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={searchedProducts.length}
        itemsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ProductList;
