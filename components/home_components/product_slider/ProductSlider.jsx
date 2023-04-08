import Header from './header/Header';
import Slider from './slider/Slider';
import styles from './ProductSlider.module.scss';

const ProductSlider = ({ products, title, icon }) => {
  return (
    <section className={styles.product_slider}>
      <div className={styles.center}>
        <Header title={title} icon={icon} />
        <Slider products={products} />
      </div>
    </section>
  );
};

export default ProductSlider;
