import { useState } from 'react';
import Navigation from './navigation/Navigation';
import CardsContainer from './cards_container/CardsContainer';
import styles from './ProductRecommendations.module.scss';

const ProductRecommendations = () => {
  const [activeSection, setActiveSection] = useState('Recommendations');

  return (
    <section className={styles.product_recommendations}>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <CardsContainer activeSection={activeSection} />
    </section>
  );
};

export default ProductRecommendations;
