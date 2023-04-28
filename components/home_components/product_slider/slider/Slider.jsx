import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import Card from './card/Card';
import styles from './Slider.module.scss';

const Slider = ({ products }) => {
  const sliderRef = useRef(null);
  const { events } = useDraggable(sliderRef);

  const handleScroll = (e) => {
    const width = e.target.clientWidth;
    const scrollWidth = e.target.scrollWidth;
    const scrollLeft = e.target.scrollLeft;
    const scrollLeftBtn =
      e.target.parentElement.children[0].children[1].children[0];
    const scrollRightBtn =
      e.target.parentElement.children[0].children[1].children[1];
    if (!scrollLeft) scrollLeftBtn.style.opacity = 0.5;
    if (scrollLeft) scrollLeftBtn.style.opacity = 1;
    if (scrollWidth - width === scrollLeft) scrollRightBtn.style.opacity = 0.5;
    if (scrollWidth - width > scrollLeft) scrollRightBtn.style.opacity = 1;
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      {...events}
      onScroll={handleScroll}
    >
      {products.map((product) => {
        return <Card key={product._id} product={product} />;
      })}
    </div>
  );
};

export default Slider;
