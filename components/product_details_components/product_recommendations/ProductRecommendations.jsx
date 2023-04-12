import { useState, useRef, useEffect } from 'react';
import Navigation from './navigation/Navigation';
import RecommendationsSlider from '@/features/recommendations_slider/RecommendationsSlider';
import styles from './ProductRecommendations.module.scss';

// temp data
import { computers } from '@/data/temporary/computers';

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
      <RecommendationsSlider products={computers} />
    </section>
  );
};

export default ProductRecommendations;
