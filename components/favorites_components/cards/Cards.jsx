import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavoriteCard from './favorite_card/FavoriteCard';
import Pagination from './pagination/Pagination';
import styles from './Cards.module.scss';
import sortProducts from '../functions/sortProduct';
import filterProducts from '../functions/filterProducts';
import searchProducts from '../functions/searchProducts';

const Cards = () => {
  const { products, sort, filter, search } = useSelector(
    (state) => state.favorites
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const lastProductIndex = currentPage * productsPerPage;
  const fistProductIndex = lastProductIndex - productsPerPage;

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    scrollToTop();
  }, [currentPage]);

  const sortedProducts = sortProducts(products, sort);
  const filteredProducts = filterProducts(sortedProducts, filter);
  const searchedProducts = searchProducts(filteredProducts, search);

  const paginatedProducts = searchedProducts.slice(
    fistProductIndex,
    lastProductIndex
  );

  return (
    <section className={styles.cards}>
      {paginatedProducts.map((product) => {
        return <FavoriteCard key={product.id} product={product} />;
      })}

      {searchedProducts.length > productsPerPage ? (
        <Pagination
          totalProducts={searchedProducts.length}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </section>
  );
};

export default Cards;
