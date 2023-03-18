import Path from './path/Path';
import Slider from './slider/Slider';
import Info from './info/Info';
import styles from './ProductShowcase.module.scss';

// FIX THE COLORS AND INFO AND FINISH THE DESCRIPTION

const ProductShowcase = ({ data }) => {
  return (
    <section className={styles.product_showcase}>
      <div className={styles.center}>
        <Path />

        <div className={styles.columns_container}>
          <Slider images={data.images} />
          <Info data={data} />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
