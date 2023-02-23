import styles from './ProductsContainer.module.scss';
import ProductCardResponseve from '@/components/cards/product_card_responseve/ProductCardResponseve';

const ProductsContainer = ({ layout }) => {
  return (
    <div
      className={`${styles.products_container} ${layout && styles.no_sidebar}`}
    >
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
      <ProductCardResponseve />
    </div>
  );
};

export default ProductsContainer;
