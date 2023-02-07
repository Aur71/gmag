import styles from './ProductsSlider.module.scss';
import { useRef, useEffect } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import ProductCard from '@/components/cards/product_card/ProductCard';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

const ProductsSlider = ({ title, icon }) => {
  const cardsContainerRef = useRef(null);
  const { events } = useDraggable(cardsContainerRef);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  const slideLeft = () => {
    const sliderWidth = cardsContainerRef.current.getBoundingClientRect().width;
    cardsContainerRef.current.style.scrollBehavior = 'smooth';
    cardsContainerRef.current.scrollLeft -= sliderWidth;
    cardsContainerRef.current.style.scrollBehavior = 'auto';
  };

  const slideRight = () => {
    const sliderWidth = cardsContainerRef.current.getBoundingClientRect().width;
    cardsContainerRef.current.style.scrollBehavior = 'smooth';
    cardsContainerRef.current.scrollLeft += sliderWidth;
    cardsContainerRef.current.style.scrollBehavior = 'auto';
  };

  //   DISABLING THE BUTTON IF IT CANT SCROLL
  useEffect(() => {
    const container = cardsContainerRef.current;

    const handleScroll = () => {
      const sliderWidth = container.getBoundingClientRect().width;
      const scrollWidth = container.scrollWidth;
      const scrollPostion = container.scrollLeft;

      if (scrollPostion === 0) {
        btnLeftRef.current.classList.add(styles.inactive);
      } else {
        btnLeftRef.current.classList.remove(styles.inactive);
      }

      if (scrollPostion === scrollWidth - sliderWidth) {
        btnRightRef.current.classList.add(styles.inactive);
      } else {
        btnRightRef.current.classList.remove(styles.inactive);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <div className={styles.slider}>
          <div className={styles.header}>
            <h2>
              <span>{title}</span>
              <span>{icon}</span>
            </h2>

            <div className={styles.btn_container}>
              <button onClick={slideLeft} ref={btnLeftRef}>
                <HiOutlineArrowSmLeft />
              </button>

              <button onClick={slideRight} ref={btnRightRef}>
                <HiOutlineArrowSmRight />
              </button>
            </div>
          </div>

          <div
            className={styles.cards_container}
            ref={cardsContainerRef}
            {...events}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
