import styles from './PriceBlock.module.scss';
import { useState, useEffect, useRef } from 'react';
import { RxCaretUp } from 'react-icons/rx';

const PriceBlock = ({ name, options }) => {
  const [showBlock, setShowBlock] = useState(true);
  const priceBlockRef = useRef(null);

  useEffect(() => {
    const priceBlockChildren = priceBlockRef.current.children;
    const btnHeight = priceBlockChildren[0].getBoundingClientRect().height;
    const optionsHeight = priceBlockChildren[1].getBoundingClientRect().height;

    if (!showBlock) {
      priceBlockRef.current.style.height = `${btnHeight}px`;
    } else {
      priceBlockRef.current.style.height = `${btnHeight + optionsHeight}px`;
    }
  }, [showBlock]);

  return (
    <div className={styles.price_block} ref={priceBlockRef}>
      <button onClick={() => setShowBlock(!showBlock)}>
        {name}
        <RxCaretUp className={`${styles.icon} ${!showBlock && styles.down}`} />
      </button>

      <div className={styles.options}></div>
    </div>
  );
};

export default PriceBlock;
