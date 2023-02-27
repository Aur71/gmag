import styles from './ProductsContainer.module.scss';
import { useSelector } from 'react-redux';
import ProductCardResponseve from '@/components/cards/product_card_responseve/ProductCardResponseve';

const ProductsContainer = ({ data, layout }) => {
  const { currentPage, productsPerPage, sortBy } = useSelector(
    (state) => state.products
  );
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const paginatedData = data.slice(firstProductIndex, lastProductIndex);

  console.log(sortBy);

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
