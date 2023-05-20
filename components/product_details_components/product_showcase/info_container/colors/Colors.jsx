import { useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import Color from './color/Color';
import styles from './Colors.module.scss';

const Colors = ({ product, activeColor, setActiveColor }) => {
  const { colors } = product;
  const sliderRef = useRef(null);
  const { events } = useDraggable(sliderRef);

  function hasTouchscreen() {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  // this function creates visible overflow if needed to let the user know there are more options
  const checkOverflow = () => {
    const computedStyles = window.getComputedStyle(sliderRef.current);
    const gap = parseInt(computedStyles.getPropertyValue('gap'));
    const children = Array.from(sliderRef.current.children);
    const clientWidth = sliderRef.current.clientWidth;
    let childrenWidth = 0;
    children.forEach((child) => {
      childrenWidth += child.getBoundingClientRect().width + gap;
      const overflow = clientWidth - childrenWidth;
      if (overflow >= -gap && overflow <= 0) {
        sliderRef.current.style.gap = `${gap - 10}px`;
      }
    });
  };

  useEffect(() => {
    if (hasTouchscreen()) sliderRef.current.style.overflowX = 'auto';
    checkOverflow();

    const initialColor = colors.find((color) => color.stock >= 1);
    setActiveColor(initialColor);
  }, [colors, setActiveColor]);

  return (
    <div className={styles.colors}>
      <h2>Colors</h2>

      <ul ref={sliderRef} {...events}>
        {colors.map((color) => {
          return (
            <li key={color._id}>
              <Color
                color={color}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Colors;
