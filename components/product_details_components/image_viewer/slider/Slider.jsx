import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './Slider.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  increaseActiveImageIndex,
  decreaseActiveImageIndex,
  handleZoomOrigin,
} from '@/redux/reducers/singleProductSlice';

const Slider = ({ images }) => {
  const dispatch = useDispatch();
  const imagesContainerRef = useRef(null);
  const { activeImageIndex, zoom, zoomOrigin } = useSelector(
    (state) => state.singleProduct
  );
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState(null);
  const [currentMousePosition, setCurrentMousePosition] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsMouseDown(true);
    setInitialMousePosition(e.pageX);
    setCurrentImageIndex(activeImageIndex);
    imagesContainerRef.current.style.cursor = 'all-scroll';
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setIsMouseDown(false);
    imagesContainerRef.current.style.cursor = 'zoom-in';
    if (!currentMousePosition) return;

    if (currentMousePosition < initialMousePosition - 50) {
      dispatch(
        increaseActiveImageIndex({
          num: currentImageIndex,
          max: images.length - 1,
        })
      );
      setCurrentMousePosition(null);
      return;
    }

    if (currentMousePosition > initialMousePosition + 50) {
      dispatch(
        decreaseActiveImageIndex({
          num: currentImageIndex,
          max: images.length - 1,
        })
      );
      setCurrentMousePosition(null);
      return;
    }
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isMouseDown) return;
    setCurrentMousePosition(e.pageX);
  };

  const handleZoom = (e) => {
    e.preventDefault();
    if (typeof window === 'undefined') return; // Check if window is defined
    const containerOffset = e.target.getBoundingClientRect();
    const centerX = containerOffset.width / 2;
    const centerY = containerOffset.height / 2;
    const x = e.clientX - containerOffset.left;
    const y = e.clientY - containerOffset.top;
    const translateX = centerX - x;
    const translateY = centerY - y;
    const transfromOrigin = `${translateX}px, ${translateY}px`;
    dispatch(handleZoomOrigin(transfromOrigin));
    if (zoom === 2.5) {
      imagesContainerRef.current.style.cursor = 'zoom-out';
      return;
    }
    imagesContainerRef.current.style.cursor = 'zoom-in';
  };

  return (
    <div className={styles.slider}>
      <button
        className={styles.slide_btn}
        onClick={() =>
          dispatch(
            decreaseActiveImageIndex({
              num: activeImageIndex,
              max: images.length - 1,
            })
          )
        }
      >
        <FiChevronLeft />
      </button>

      <button
        className={styles.slide_btn}
        onClick={() =>
          dispatch(
            increaseActiveImageIndex({
              num: activeImageIndex,
              max: images.length - 1,
            })
          )
        }
      >
        <FiChevronRight />
      </button>

      <div
        className={styles.images_container}
        ref={imagesContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images?.map((image, index) => {
          const key = `image_viewer_slider_${image.name}_${index}`;

          if (activeImageIndex === index)
            return (
              <div
                key={key}
                className={`${styles.img_container} ${styles.current}`}
                onClick={handleZoom}
              >
                <Image
                  src={image.img}
                  alt={image.name}
                  width={1000}
                  height={1000}
                  style={{
                    transform: `scale(${zoom}) translate(${zoomOrigin})`,
                  }}
                />
              </div>
            );

          if (
            index === activeImageIndex - 1 ||
            (activeImageIndex === 0 && index === images.length - 1)
          )
            return (
              <div
                key={key}
                className={`${styles.img_container} ${styles.prev}`}
              >
                <Image
                  src={image.img}
                  alt={image.name}
                  width={1000}
                  height={1000}
                />
              </div>
            );

          return (
            <div key={key} className={`${styles.img_container} ${styles.next}`}>
              <Image
                src={image.img}
                alt={image.name}
                width={1000}
                height={1000}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
