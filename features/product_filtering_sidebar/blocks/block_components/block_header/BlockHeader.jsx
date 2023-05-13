import { useState, useEffect, useRef } from 'react';
import styles from './BlockHeader.module.scss';
import { RxCaretUp } from 'react-icons/rx';

const BlockHeader = ({ name, dependencies }) => {
  const [showBlock, setShowBlock] = useState(true);
  const blockHeaderRef = useRef(null);

  useEffect(() => {
    const parent = blockHeaderRef.current.parentNode;
    const headerHeight = blockHeaderRef.current.getBoundingClientRect().height;
    const optionsHeight = parent.children[1].getBoundingClientRect().height;
    if (!showBlock) parent.style.height = `${headerHeight}px`;
    else parent.style.height = `${headerHeight + optionsHeight}px`;
  }, [showBlock, dependencies]);

  return (
    <div className={styles.block_header} ref={blockHeaderRef}>
      <button onClick={() => setShowBlock(!showBlock)}>
        {name}
        <RxCaretUp className={`${styles.icon} ${!showBlock && styles.down}`} />
      </button>
    </div>
  );
};

export default BlockHeader;
