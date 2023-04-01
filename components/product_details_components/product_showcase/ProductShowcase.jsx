import { useRef, useEffect } from 'react';
import Path from './path/Path';
import Slider from './slider/Slider';
import Info from './info/Info';
import styles from './ProductShowcase.module.scss';

const ProductShowcase = ({ data, onMount }) => {
  const productShowcaseRef = useRef(null);

  useEffect(() => {
    if (onMount && productShowcaseRef.current) {
      onMount(productShowcaseRef.current);
    }
  }, [onMount]);

  return (
    <section className={styles.product_showcase} ref={productShowcaseRef}>
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
