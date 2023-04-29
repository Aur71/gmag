import { useRef, useEffect } from 'react';
import styles from './Color.module.scss';

const Color = ({ color, activeColor, setActiveColor }) => {
  const colorContainerRef = useRef(null);

  useEffect(() => {
    // Sets the background-color of the circle.
    colorContainerRef.current.style.backgroundColor = color.value;
  }, [color]);

  return (
    <div className={`${styles.color} ${!color.stock && styles.disabled}`}>
      <button onClick={() => setActiveColor(color)}>
        <span ref={colorContainerRef}></span>
        {color.name}
      </button>
      <div
        className={`${activeColor?.name === color.name && styles.active}`}
      ></div>
    </div>
  );
};

export default Color;
