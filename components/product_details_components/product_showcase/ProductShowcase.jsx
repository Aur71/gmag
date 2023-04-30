import Path from './path/Path';
import Slider from './slider/Slider';
import Info from './info/Info';
import styles from './ProductShowcase.module.scss';

const ProductShowcase = ({ product }) => {
  return (
    <section className={styles.product_showcase}>
      <div className={styles.center}>
        <Path />

        <div className={styles.columns_container}>
          <Slider images={product.images} />
          <Info product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
