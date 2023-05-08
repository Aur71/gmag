import styles from './Header.module.scss';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

const Header = ({ title, icon }) => {
  const slideLeft = (e) => {
    const slider =
      e.target.parentElement.parentElement.parentElement.children[1];
    const computedStyle = getComputedStyle(slider);
    const gap = computedStyle.getPropertyValue('gap').split('p');
    const numericGap = parseFloat(gap);
    const cardWidth = slider.children[0].getBoundingClientRect().width;
    const sliderWidth = slider.clientWidth;
    let numberOfCardsScrolled = Math.floor(sliderWidth / cardWidth) - 1;
    if (numberOfCardsScrolled === 0) numberOfCardsScrolled = 1;
    const totalScroll =
      numberOfCardsScrolled * cardWidth + numberOfCardsScrolled * numericGap;
    slider.style.scrollBehavior = 'smooth';
    slider.scrollLeft -= totalScroll;
    slider.style.scrollBehavior = 'auto';
  };

  const slideRight = (e) => {
    const slider =
      e.target.parentElement.parentElement.parentElement.children[1];
    const computedStyle = getComputedStyle(slider);
    const gap = computedStyle.getPropertyValue('gap').split('p');
    const numericGap = parseFloat(gap);
    const cardWidth = slider.children[0].getBoundingClientRect().width;
    const sliderWidth = slider.clientWidth;
    let numberOfCardsScrolled = Math.floor(sliderWidth / cardWidth) - 1;
    if (numberOfCardsScrolled === 0) numberOfCardsScrolled = 1;
    const totalScroll =
      numberOfCardsScrolled * cardWidth + numberOfCardsScrolled * numericGap;
    slider.style.scrollBehavior = 'smooth';
    slider.scrollLeft += totalScroll;
    slider.style.scrollBehavior = 'auto';
  };

  return (
    <div className={styles.header}>
      <h2>
        <span>{title}</span>
        <span>{icon}</span>
      </h2>

      <div className={styles.btn_container}>
        <button onClick={slideLeft}>
          <HiOutlineArrowSmLeft className={styles.icon} />
        </button>

        <button onClick={slideRight}>
          <HiOutlineArrowSmRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
