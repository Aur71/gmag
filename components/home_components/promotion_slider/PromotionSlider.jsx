import { useState, useEffect } from 'react';
import SlideLeftBtn from './slide_left_btn/SlideLeftBtn';
import SlideRightBtn from './slide_right_btn/SlideRightBtn';
import RadioBtns from './radio_btns/RadioBtns';
import Images from './images/Images';
import styles from './PromotionSlider.module.scss';

const PromotionSlider = ({ promotionSlider }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkNum = (num) => {
    if (num > promotionSlider.length - 1) return 0;
    if (num < 0) return promotionSlider.length - 1;
    return num;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(checkNum(activeIndex + 1));
    }, 10000);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const slideLeft = () => setActiveIndex(checkNum(activeIndex - 1));
  const slideRight = () => setActiveIndex(checkNum(activeIndex + 1));

  return (
    <section className={styles.promotion_slider}>
      <div className={styles.slider}>
        <SlideLeftBtn slideLeft={slideLeft} />
        <SlideRightBtn slideRight={slideRight} />
        <RadioBtns
          numberOfSlides={promotionSlider.length}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Images promotionSlider={promotionSlider} activeIndex={activeIndex} />
      </div>
    </section>
  );
};

export default PromotionSlider;
