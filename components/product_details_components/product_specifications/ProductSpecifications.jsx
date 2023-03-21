import Block from './block/Block';
import { useState, useRef, useEffect } from 'react';
import styles from './ProductSpecifications.module.scss';

const ProductSpecifications = ({ specifications }) => {
  const [showMore, setShowMore] = useState(false);
  const productSpecificationsRef = useRef(null);
  const paddingContainerRef = useRef(null);
  const btnRef = useRef(null);

  const handleShowMore = () => {
    const paddingContainerHeight =
      paddingContainerRef.current.getBoundingClientRect().height;

    if (!showMore)
      productSpecificationsRef.current.style.height = `${paddingContainerHeight}px`;
    else productSpecificationsRef.current.style.height = `500px`;
    setShowMore(!showMore);
  };

  useEffect(() => {
    const paddingContainerHeight =
      paddingContainerRef.current.getBoundingClientRect().height;

    if (paddingContainerHeight <= 500) {
      productSpecificationsRef.current.style.height = `${paddingContainerHeight}px`;
      setShowMore(true);
      btnRef.current.style.display = 'none';
    } else {
      productSpecificationsRef.current.style.height = `500px`;
      setShowMore(false);
      btnRef.current.style.display = 'flex';
    }
  }, [specifications]);

  return (
    <section
      className={styles.product_specifications}
      ref={productSpecificationsRef}
    >
      <div className={styles.padding_container} ref={paddingContainerRef}>
        <div className={styles.center}>
          <h2>Specifications</h2>
          {specifications.map((item) => {
            const key = `block_${item.category}`;

            return <Block key={key} item={item} />;
          })}
        </div>
      </div>

      <button onClick={handleShowMore} ref={btnRef}>
        {showMore ? 'Show less' : 'Show more'}
      </button>

      <div
        className={`${styles.overlay} ${showMore ? styles.disabled : null}`}
      ></div>
    </section>
  );
};

export default ProductSpecifications;
