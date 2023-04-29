import Color from './color/Color';
import { useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import styles from './Colors.module.scss';

const Colors = ({ colors, activeColor, setActiveColor }) => {
  const sliderRef = useRef(null);
  const { events } = useDraggable(sliderRef);

  useEffect(() => {
    const initialColor = colors.find((color) => color.stock >= 1);
    setActiveColor(initialColor);
  }, [colors]);

  return (
    <div className={styles.colors}>
      <h2>Colors:</h2>

      <div className={styles.slider} ref={sliderRef} {...events}>
        {colors?.map((color) => {
          return (
            <Color
              key={color._id}
              color={color}
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
