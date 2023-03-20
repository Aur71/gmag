import Color from './color/Color';
import { useRef, useState, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { useDispatch } from 'react-redux';
import styles from './Colors.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { handleActiveColor } from '@/redux/reducers/singleProductSlice';

const Colors = ({ colors }) => {
  const dispatch = useDispatch();
  const colorsContainerRef = useRef(null);
  const { events } = useDraggable(colorsContainerRef);
  const [disableScrollLeftBtn, setDisableScrollLeftBtn] = useState(false);
  const [disableScrollRightBtn, setDisableScrollRightBtn] = useState(false);

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
    const initialColor = colors.find((color) => color.stock >= 1);
    dispatch(handleActiveColor(initialColor));
  }, [colors, dispatch]);

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
          {colors?.map((color, index) => {
            return <Color key={index} color={color} />;
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
