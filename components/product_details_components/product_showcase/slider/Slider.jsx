import { useRef, useEffect, useState, useCallback } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import Image from 'next/image';
import styles from './Slider.module.scss';
import {
  BsChevronDown,
  BsChevronUp,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';

// TEMP
import img1 from '../../../../public/temp/computer.png';
import img2 from '../../../../public/temp/laptop.png';

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const btnsSliderRef = useRef(null);
  const { events } = useDraggable(btnsSliderRef);
  const [disableTopLeftBtn, setDisableTopLeftBtn] = useState(false);
  const [disableBottomRightBtn, setDisableBottomRightBtn] = useState(false);

  const slideUp = () => {
    const sliderHeight = btnsSliderRef.current.getBoundingClientRect().height;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollTop -= sliderHeight;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const slideDown = () => {
    const sliderHeight = btnsSliderRef.current.getBoundingClientRect().height;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollTop += sliderHeight;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const slideLeft = () => {
    const sliderWidth = btnsSliderRef.current.getBoundingClientRect().width;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollLeft -= sliderWidth;
    btnsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const slideRight = () => {
    const sliderWidth = btnsSliderRef.current.getBoundingClientRect().width;
    btnsSliderRef.current.style.scrollBehavior = 'smooth';
    btnsSliderRef.current.scrollLeft += sliderWidth;
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
          <button className={`${styles.img_btn} ${styles.active}`}>
            <Image
              src={img1}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img2}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img1}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img2}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img1}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img2}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img1}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
          <button className={styles.img_btn}>
            <Image
              src={img2}
              alt='temp'
              width={100}
              height={100}
              priority={true}
            />
          </button>
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
          src={img1}
          alt='temporary img'
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Slider;
