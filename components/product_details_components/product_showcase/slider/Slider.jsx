import { useRef, useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDraggable } from 'react-use-draggable-scroll';
import Image from 'next/image';
import styles from './Slider.module.scss';
import {
  BsChevronDown,
  BsChevronUp,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import {
  handleActiveImageIndex,
  handleShowImageViewer,
} from '@/redux/reducers/singleProductSlice';

const Slider = ({ images }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(0);
  const btnsSliderRef = useRef(null);
  const { events } = useDraggable(btnsSliderRef);
  const [disableTopLeftBtn, setDisableTopLeftBtn] = useState(false);
  const [disableBottomRightBtn, setDisableBottomRightBtn] = useState(false);
  const { activeImageIndex } = useSelector((state) => state.singleProduct);

  const slideUp = () => {
    const sliderHeight = btnsSliderRef.current.getBoundingClientRect().height;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollTop -= sliderHeight - 50;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const slideDown = () => {
    const sliderHeight = btnsSliderRef.current.getBoundingClientRect().height;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollTop += sliderHeight - 50;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const slideLeft = () => {
    const sliderWidth = btnsSliderRef.current.getBoundingClientRect().width;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollLeft -= sliderWidth - 50;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const slideRight = () => {
    const sliderWidth = btnsSliderRef.current.getBoundingClientRect().width;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollLeft += sliderWidth - 50;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const handleScroll = useCallback(() => {
    const target = btnsSliderRef.current;
    const clientHeight = target.clientHeight;
    const clientWidth = target.clientWidth;
    const scrollTop = target.scrollTop;
    const scrollLeft = target.scrollLeft;
    const scrollHeight = target.scrollHeight;
    const scrollWidth = target.scrollWidth;

    if (clientHeight === scrollHeight && windowWidth > 1400) {
      setDisableTopLeftBtn(true);
      setDisableBottomRightBtn(true);
      return;
    }
    if (!scrollTop && windowWidth > 1400) {
      setDisableTopLeftBtn(true);
      return;
    }
    if (scrollHeight - clientHeight === scrollTop && windowWidth > 1400) {
      setDisableBottomRightBtn(true);
      return;
    }
    if (clientWidth === scrollWidth && windowWidth && windowWidth <= 1400) {
      setDisableTopLeftBtn(true);
      setDisableBottomRightBtn(true);
      return;
    }
    if (!scrollLeft && windowWidth && windowWidth <= 1400) {
      setDisableTopLeftBtn(true);
      return;
    }
    if (
      scrollWidth - clientWidth === scrollLeft &&
      windowWidth &&
      windowWidth <= 1400
    ) {
      setDisableBottomRightBtn(true);
      return;
    }
    setDisableTopLeftBtn(false);
    setDisableBottomRightBtn(false);
  }, [windowWidth]);

  // RESIZE EVENT
  useEffect(() => {
    if (!windowWidth) setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  useEffect(() => {
    handleScroll();
  }, [windowWidth, handleScroll]);

  return (
    <div className={styles.slider}>
      <div className={styles.btns_container}>
        <button
          className={`${styles.slide_btn} ${
            disableTopLeftBtn && styles.disabled
          }`}
          onClick={windowWidth <= 1400 ? slideLeft : slideUp}
        >
          {windowWidth <= 1400 ? <BsChevronLeft /> : <BsChevronUp />}
        </button>

        <div
          className={styles.btns_slider}
          ref={btnsSliderRef}
          {...events}
          onScroll={handleScroll}
        >
          {images?.map((image, index) => {
            const key = `showcase_${image.name}_${index}`;
            return (
              <button
                key={key}
                className={`${styles.img_btn} ${
                  activeImageIndex === index && styles.active
                }`}
                onMouseOver={() => dispatch(handleActiveImageIndex(index))}
                onClick={() => dispatch(handleShowImageViewer(true))}
              >
                <Image
                  priority={true}
                  src={image.img}
                  alt={image.name}
                  width={100}
                  height={100}
                />
              </button>
            );
          })}
        </div>

        <button
          className={`${styles.slide_btn} ${
            disableBottomRightBtn && styles.disabled
          }`}
          onClick={windowWidth <= 1400 ? slideRight : slideDown}
        >
          {windowWidth <= 1400 ? <BsChevronRight /> : <BsChevronDown />}
        </button>
      </div>

      <div className={styles.img_container}>
        <Image
          priority={true}
          src={images[activeImageIndex].img}
          alt='temporary img'
          width={500}
          height={500}
          onClick={() => dispatch(handleShowImageViewer(true))}
        />
      </div>
    </div>
  );
};

export default Slider;
