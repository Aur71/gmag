import { useState, useRef, useEffect } from 'react';
import Navigation from './navigation/Navigation';
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
    </section>
  );
};

export default ProductRecommendations;
