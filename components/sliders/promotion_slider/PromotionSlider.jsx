import styles from './PromotionSlider.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import img1 from '../../../public/temp/slider-1.jpg';
import img2 from '../../../public/temp/slider-2.jpg';
import img3 from '../../../public/temp/slider-3.jpg';

const sliderData = [
  {
    id: 1,
    path: '#',
    name: 'no name',
    img: img1,
  },

  {
    id: 2,
    path: '#',
    name: 'no name',
    img: img2,
  },

  {
    id: 3,
    path: '#',
    name: 'no name',
    img: img3,
  },
];

const PromotionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkNum = (num) => {
    if (num > sliderData.length - 1) {
      return 0;
    }

    if (num < 0) {
      return sliderData.length - 1;
    }

    return num;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex(checkNum(activeIndex + 1));
    }, 10000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <div className={styles.slider}>
          <button
            className={styles.left_btn}
            onClick={() => setActiveIndex(checkNum(activeIndex - 1))}
          >
            <AiOutlineLeft />
          </button>

          <button
            className={styles.right_btn}
            onClick={() => setActiveIndex(checkNum(activeIndex + 1))}
          >
            <AiOutlineRight />
          </button>

          <div className={styles.pagination}>
            {sliderData.map((item, index) => {
              if (activeIndex === index) {
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={styles.active}
                  ></button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                ></button>
              );
            })}
          </div>

          <div className={styles.links_container}>
            {sliderData.map((item, index) => {
              if (index === activeIndex) {
                return (
                  <Link
                    href={item.path}
                    key={item.id}
                    className={styles.active}
                  >
                    <Image src={item.img} alt={item.name} priority={true} />
                  </Link>
                );
              }

              if (
                index === activeIndex - 1 ||
                (activeIndex === 0 && index === sliderData.length - 1)
              ) {
                return (
                  <Link href={item.path} key={item.id} className={styles.prev}>
                    <Image src={item.img} alt={item.name} priority={true} />
                  </Link>
                );
              }

              return (
                <Link href={item.path} key={item.id} className={styles.next}>
                  <Image src={item.img} alt={item.name} priority={true} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSlider;
