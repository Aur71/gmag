import styles from './Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import { RxCaretUp } from 'react-icons/rx';

const Header = ({ name, dependencies }) => {
  const [showBlock, setShowBlock] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const parent = headerRef.current.parentNode;
    const headerHeight = headerRef.current.getBoundingClientRect().height;
    const optionsHeight = parent.children[1].getBoundingClientRect().height;
    if (!showBlock) parent.style.height = `${headerHeight}px`;
    else parent.style.height = `${headerHeight + optionsHeight}px`;
  }, [showBlock, dependencies]);

  return (
    <div className={styles.header} ref={headerRef}>
      <button onClick={() => setShowBlock(!showBlock)}>
        {name}
        <RxCaretUp className={`${styles.icon} ${!showBlock && styles.down}`} />
      </button>
    </div>
  );
};

export default Header;
