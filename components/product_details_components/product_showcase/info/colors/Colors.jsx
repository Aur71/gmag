import Color from './color/Color';
import { useRef, useState, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import styles from './Colors.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const colors = [
  {
    name: 'Black',
    color: '#000000',
    stock: 1,
  },

  {
    name: 'White',
    color: '#FFFFFF',
    stock: 1,
  },

  {
    name: 'Red',
    color: '#B54040',
    stock: 1,
  },

  {
    name: 'Skyblue',
    color: '#43D2CF',
    stock: 1,
  },
];

const Colors = () => {
  const colorsContainerRef = useRef(null);
  const { events } = useDraggable(colorsContainerRef);
  const [disableScrollLeftBtn, setDisableScrollLeftBtn] = useState(false);
  const [disableScrollRightBtn, setDisableScrollRightBtn] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0].name);

  const handleScroll = () => {
    const target = colorsContainerRef.current;
    const scrollLeft = target.scrollLeft;
    const width = target.clientWidth;
    const scrollWidth = target.scrollWidth;

    if (scrollWidth <= width) {
      setDisableScrollLeftBtn(true);
      setDisableScrollRightBtn(true);
      return;
    }

    if (!scrollLeft) {
      setDisableScrollLeftBtn(true);
      return;
    }

    if (scrollWidth - width === scrollLeft) {
      setDisableScrollRightBtn(true);
      return;
    }

    setDisableScrollLeftBtn(false);
    setDisableScrollRightBtn(false);
  };

  const slideLeft = () => {
    const width = colorsContainerRef.current.getBoundingClientRect().width;
    colorsContainerRef.current.style.scrollBehavior = 'smooth';
    colorsContainerRef.current.scrollLeft -= width;
    colorsContainerRef.current.style.scrollBehavior = 'auto';
  };

  const slideRight = () => {
    const width = colorsContainerRef.current.getBoundingClientRect().width;
    colorsContainerRef.current.style.scrollBehavior = 'smooth';
    colorsContainerRef.current.scrollLeft += width;
    colorsContainerRef.current.style.scrollBehavior = 'auto';
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const handleActiveColor = (color) => {
    setActiveColor(color);
  };

  return (
    <div className={styles.colors}>
      <h2>Colors</h2>

      <div className={styles.colors_slider}>
        <button
          className={`${styles.slide_btn} ${
            disableScrollLeftBtn && styles.disabled
          }`}
          onClick={slideLeft}
        >
          <BsChevronLeft />
        </button>

        <div
          className={styles.colors_container}
          ref={colorsContainerRef}
          {...events}
          onScroll={handleScroll}
        >
          {colors.map((color, index) => {
            return (
              <Color
                key={index}
                active={activeColor === color.name ? true : false}
                color={color}
                handleActiveColor={handleActiveColor}
              />
            );
          })}
        </div>

        <button
          className={`${styles.slide_btn} ${
            disableScrollRightBtn && styles.disabled
          }`}
          onClick={slideRight}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Colors;
