import Link from 'next/link';
import Image from 'next/image';
import styles from './Images.module.scss';

const Images = ({ promotionSlider, activeIndex }) => {
  return (
    <div className={styles.images}>
      {promotionSlider.map((slide, index) => {
        const key = `slide_${slide.id}`;

        if (index === activeIndex) {
          return (
            <Link href={slide.path} key={key} className={styles.active}>
              <Image
                src={slide.img}
                alt={slide.name}
                priority={true}
                width={1540}
                height={600}
              />
            </Link>
          );
        }

        if (
          index === activeIndex - 1 ||
          (activeIndex === 0 && index === promotionSlider.length - 1)
        ) {
          return (
            <Link href={slide.path} key={key} className={styles.prev}>
              <Image
                src={slide.img}
                alt={slide.name}
                priority={true}
                width={1540}
                height={600}
              />
            </Link>
          );
        }

        return (
          <Link href={slide.path} key={key} className={styles.next}>
            <Image
              src={slide.img}
              alt={slide.name}
              priority={true}
              width={1540}
              height={600}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Images;
