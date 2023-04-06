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
  const productsPerPage = 1;

  const sortedProducts = sortProducts(products, sort);
  const filteredProducts = filterProducts(sortedProducts, filter);
  const searchedProducts = searchProducts(filteredProducts, search);

  return (
    <section className={styles.cards}>
      {searchedProducts.map((product) => {
        return <FavoriteCard key={product.id} product={product} />;
      })}

      {searchedProducts.length > productsPerPage ? <Pagination /> : null}
    </section>
  );
};

export default Cards;
