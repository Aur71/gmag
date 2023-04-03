import { useState, useRef, useEffect } from 'react';
import Navigation from './navigation/Navigation';
import CardsContainer from './cards_container/CardsContainer';
import styles from './ProductRecommendations.module.scss';

const ProductRecommendations = ({ onMount }) => {
  const productRecommendationsRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Recommendations');

  useEffect(() => {
    if (onMount && productRecommendationsRef.current) {
      onMount(productRecommendationsRef.current);
    }
  }, [onMount]);

  return (
    <section
      className={styles.product_recommendations}
      ref={productRecommendationsRef}
    >
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <CardsContainer activeSection={activeSection} />
    </section>
  );
};

export default ProductRecommendations;
