import ProductsSlider from '@/components/sliders/products_slider/ProductsSlider';
import styles from './CardsContainer.module.scss';

const CardsContainer = () => {
  return (
    <div className={styles.cards_container}>
      <ProductsSlider />
    </div>
  );
};

export default CardsContainer;
