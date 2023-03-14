import Path from './path/Path';
import Slider from './slider/Slider';
import Info from './info/Info';
import styles from './ProductShowcase.module.scss';

const ProductShowcase = () => {
  return (
    <section className={styles.product_showcase}>
      <div className={styles.center}>
        <Path />

        <div className={styles.columns_container}>
          <Slider />
          <Info />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
