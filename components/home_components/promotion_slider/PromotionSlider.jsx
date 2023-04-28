import { useState, useEffect, useCallback } from 'react';
import SlideLeftBtn from './slide_left_btn/SlideLeftBtn';
import SlideRightBtn from './slide_right_btn/SlideRightBtn';
import RadioBtns from './radio_btns/RadioBtns';
import Images from './images/Images';
import styles from './PromotionSlider.module.scss';

const PromotionSlider = ({ promotionSlides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkNum = useCallback(
    (num) => {
      if (num > promotionSlides.length - 1) return 0;
      if (num < 0) return promotionSlides.length - 1;
      return num;
    },
    [promotionSlides]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(checkNum(activeIndex + 1));
    }, 10000);
    return () => clearTimeout(timeout);
  }, [activeIndex, checkNum]);

  const slideLeft = () => setActiveIndex(checkNum(activeIndex - 1));
  const slideRight = () => setActiveIndex(checkNum(activeIndex + 1));

  return (
    <section className={styles.promotion_slider}>
      <div className={styles.slider}>
        <SlideLeftBtn slideLeft={slideLeft} />
        <SlideRightBtn slideRight={slideRight} />
        <RadioBtns
          numberOfSlides={promotionSlides.length}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Images promotionSlides={promotionSlides} activeIndex={activeIndex} />
      </div>
    </section>
  );
};

export default PromotionSlider;
