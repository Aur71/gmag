import { useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import ImgBtn from './img_btn/ImgBtn';
import styles from './ImgSlider.module.scss';

const ImgSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const { events } = useDraggable(sliderRef);

  useEffect(() => {
    function hasTouchscreen() {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    if (hasTouchscreen()) sliderRef.current.style.overflow = 'auto';
  }, [sliderRef]);

  return (
    <div className={styles.img_slider} ref={sliderRef} {...events}>
      {images.map((image, index) => {
        return <ImgBtn key={image._id} image={image} index={index} />;
      })}
    </div>
  );
};

export default ImgSlider;
