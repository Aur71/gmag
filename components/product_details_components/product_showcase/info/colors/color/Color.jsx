import { useRef, useEffect } from 'react';
import styles from './Color.module.scss';

const Color = ({ color, active, handleActiveColor }) => {
  const colorContainerRef = useRef(null);

  useEffect(() => {
    colorContainerRef.current.style.backgroundColor = color.color;
  }, [color]);

  return (
    <div className={styles.color}>
      <button onClick={() => handleActiveColor(color.name)}>
        <span ref={colorContainerRef}></span>
        {color.name}
      </button>
      <div className={`${active && styles.active}`}></div>
    </div>
  );
};

export default Color;
