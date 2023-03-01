import styles from './ProductsContainer.module.scss';
import { useSelector } from 'react-redux';
import ProductCardResponseve from '@/components/cards/product_card_responseve/ProductCardResponseve';

const ProductsContainer = ({ data, layout }) => {
  const { currentPage, productsPerPage, sortBy, filters } = useSelector(
    (state) => state.products
  );
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  // NEED TO SINCRONYZE THE FILTERS WITH THE DATA THAT IS DISPLAYED
  const paginatedData = data
    .sort((a, b) => {
      if (sortBy === 'the most popular') return b.numOfOrders - a.numOfOrders;
      if (sortBy === 'newest') return b.date - a.date;
      if (sortBy === 'increasing price') return a.currentPrice - b.currentPrice;
      if (sortBy === 'decreasing price') return b.currentPrice - a.currentPrice;
      if (sortBy === 'no. reviews') return b.reviewsCount - a.reviewsCount;
      if (sortBy === 'discount %') return b.discount - a.discount;
      return 0;
    })
    .filter((item) => {
      return item;
    })
    .slice(firstProductIndex, lastProductIndex);

  console.log(filters);

  return (
    <div
      className={`${styles.products_container} ${layout && styles.no_sidebar}`}
    >
      {paginatedData.map((item) => {
        return <ProductCardResponseve item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductsContainer;
