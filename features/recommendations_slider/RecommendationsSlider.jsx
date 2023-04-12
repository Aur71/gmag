import { useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import Card from './card/Card';
import styles from './RecommendationsSlider.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const RecommendationsSlider = ({ products }) => {
  const cardsContainerRef = useRef(null);
  const { events } = useDraggable(cardsContainerRef);
  const [displayLeftBtn, setDisplayLeftBtn] = useState(false);
  const [displayRigthBtn, setDisplayRigthBtn] = useState(true);

  const handleScroll = () => {
    const width = cardsContainerRef.current.clientWidth;
    const scrollWidth = cardsContainerRef.current.scrollWidth;
    const scrollLeft = cardsContainerRef.current.scrollLeft;

    if (!scrollLeft) setDisplayLeftBtn(false);
    if (scrollWidth - width === scrollLeft) setDisplayRigthBtn(false);
    if (scrollLeft) setDisplayLeftBtn(true);
    if (scrollWidth - width > scrollLeft) setDisplayRigthBtn(true);
  };

  const scrollLeft = () => {
    const width = cardsContainerRef.current.clientWidth;
    let numberOfCardsScrolled = Math.floor(width / 270);
    if (!numberOfCardsScrolled) numberOfCardsScrolled = 1;
    const totalScroll =
      numberOfCardsScrolled * 250 + numberOfCardsScrolled * 20;
    cardsContainerRef.current.style.scrollBehavior = 'smooth';
    cardsContainerRef.current.scrollLeft -= totalScroll;
    cardsContainerRef.current.style.scrollBehavior = 'auto';
  };

  const scrollRigth = () => {
    const width = cardsContainerRef.current.clientWidth;
    let numberOfCardsScrolled = Math.floor(width / 270);
    if (!numberOfCardsScrolled) numberOfCardsScrolled = 1;
    const totalScroll =
      numberOfCardsScrolled * 250 + numberOfCardsScrolled * 20;
    cardsContainerRef.current.style.scrollBehavior = 'smooth';
    cardsContainerRef.current.scrollLeft += totalScroll;
    cardsContainerRef.current.style.scrollBehavior = 'auto';
  };

  return (
    <div className={styles.recommendations_slider}>
      <div className={styles.slider}>
        <button
          className={!displayLeftBtn ? styles.inactive : null}
          onClick={scrollLeft}
        >
          <BsChevronLeft />
        </button>
        <button
          className={!displayRigthBtn ? styles.inactive : null}
          onClick={scrollRigth}
        >
          <BsChevronRight />
        </button>

        <div
          className={styles.cards_container}
          ref={cardsContainerRef}
          {...events}
          onScroll={handleScroll}
        >
          {products?.map((product) => {
            return <Card product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsSlider;
