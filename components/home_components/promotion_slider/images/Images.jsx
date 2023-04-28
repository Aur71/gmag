import Link from 'next/link';
import Image from 'next/image';
import styles from './Images.module.scss';

const Images = ({ promotionSlides, activeIndex }) => {
  return (
    <div className={styles.images}>
      {promotionSlides.map((slide, index) => {
        if (index === activeIndex) {
          return (
            <Link href={slide.path} key={slide._id} className={styles.active}>
              <Image
                src={slide.thumbnail}
                alt={slide.alt}
                priority={true}
                width={1540}
                height={600}
              />
            </Link>
          );
        }

        if (
          index === activeIndex - 1 ||
          (activeIndex === 0 && index === promotionSlides.length - 1)
        ) {
          return (
            <Link href={slide.path} key={slide._id} className={styles.prev}>
              <Image
                src={slide.thumbnail}
                alt={slide.alt}
                priority={true}
                width={1540}
                height={600}
              />
            </Link>
          );
        }

        return (
          <Link href={slide.path} key={slide._id} className={styles.next}>
            <Image
              src={slide.thumbnail}
              alt={slide.alt}
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
