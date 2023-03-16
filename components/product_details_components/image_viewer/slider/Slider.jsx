import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import styles from './Slider.module.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  increaseActiveImageIndex,
  decreaseActiveImageIndex,
} from '@/redux/reducers/singleProductSlice';

// TEMP IMG
import img1 from '../../../../public/temp/computer.png';
import img2 from '../../../../public/temp/laptop.png';
const images = [
  {
    name: 'img1',
    img: img1,
  },
  {
    name: 'img2',
    img: img2,
  },
  {
    name: 'img3',
    img: img1,
  },
  {
    name: 'img4',
    img: img2,
  },
  {
    name: 'img5',
    img: img1,
  },
  {
    name: 'img6',
    img: img2,
  },
  {
    name: 'img7',
    img: img2,
  },
  {
    name: 'img8',
    img: img1,
  },
  {
    name: 'img9',
    img: img2,
  },
  {
    name: 'img10',
    img: img1,
  },
  {
    name: 'img11',
    img: img2,
  },
];

const Slider = () => {
  const dispatch = useDispatch();
  const imagesContainerRef = useRef(null);
  const { activeImageIndex } = useSelector((state) => state.singleProduct);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState(null);
  const [currentMousePosition, setCurrentMousePosition] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setInitialMousePosition(e.pageX);
    setCurrentImageIndex(activeImageIndex);
    imagesContainerRef.current.style.cursor = 'all-scroll';
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    imagesContainerRef.current.style.cursor = 'all-scroll';
    if (!currentMousePosition) return;

    if (currentMousePosition < initialMousePosition - 20) {
      dispatch(
        decreaseActiveImageIndex({
          num: currentImageIndex,
          max: images.length - 1,
        })
      );
      return;
    }

    if (currentMousePosition > initialMousePosition + 20) {
      dispatch(
        increaseActiveImageIndex({
          num: currentImageIndex,
          max: images.length - 1,
        })
      );
    }
    setCurrentMousePosition(null);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isMouseDown) return;
    setCurrentMousePosition(e.pageX);
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
        {images.map((image, index) => {
          const key = `image_viewer_slider_${image.name}_${index}`;

          if (activeImageIndex === index)
            return (
              <Image
                className={styles.current}
                key={key}
                src={image.img}
                alt={image.name}
                width={1000}
                height={1000}
              />
            );

          if (
            activeImageIndex === index - 1 ||
            (index === 0 && activeImageIndex === images.length - 1)
          )
            return (
              <Image
                className={styles.prev}
                key={key}
                src={image.img}
                alt={image.name}
                width={1000}
                height={1000}
              />
            );

          return (
            <Image
              className={styles.next}
              key={key}
              src={image.img}
              alt={image.name}
              width={1000}
              height={1000}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
