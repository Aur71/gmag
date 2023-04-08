import styles from './RadioBtns.module.scss';

const RadioBtns = ({ numberOfSlides, activeIndex, setActiveIndex }) => {
  const slides = [];

  for (let i = 0; i < numberOfSlides; i++) {
    slides.push(i);
  }

  return (
    <div className={styles.radio_btns}>
      {slides.map((slide) => {
        const key = `radio_btn_${slide}`;

        if (activeIndex === slide) {
          return (
            <button
              key={key}
              onClick={() => setActiveIndex(slide)}
              className={styles.active}
            ></button>
          );
        }

        return (
          <button key={key} onClick={() => setActiveIndex(slide)}></button>
        );
      })}
    </div>
  );
};

export default RadioBtns;
