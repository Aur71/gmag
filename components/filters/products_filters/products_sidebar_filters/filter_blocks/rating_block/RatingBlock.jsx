import styles from './RatingBlock.module.scss';
import { useState, useEffect, useRef } from 'react';
import { RxCaretUp } from 'react-icons/rx';

const RatingBlock = ({ name, options }) => {
  const [showBlock, setShowBlock] = useState(true);
  const ratingBlockRef = useRef(null);

  useEffect(() => {
    const ratingBlockChildren = ratingBlockRef.current.children;
    const btnHeight = ratingBlockChildren[0].getBoundingClientRect().height;
    const optionsHeight = ratingBlockChildren[1].getBoundingClientRect().height;

    if (!showBlock) {
      ratingBlockRef.current.style.height = `${btnHeight}px`;
    } else {
      ratingBlockRef.current.style.height = `${btnHeight + optionsHeight}px`;
    }
  }, [showBlock]);

  const filteredOptions = options.filter((option) => true);

  console.log(filteredOptions);

  return (
    <div className={styles.rating_block} ref={ratingBlockRef}>
      <button onClick={() => setShowBlock(!showBlock)}>
        {name}
        <RxCaretUp className={`${styles.icon} ${!showBlock && styles.down}`} />
      </button>

      <div className={styles.options}></div>
    </div>
  );
};

export default RatingBlock;
