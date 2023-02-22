import styles from './ProductCardResponseve.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BsSuitHeart } from 'react-icons/bs';
// import { BsSuitHeartFill } from 'react-icons/bs';

// TEMP
import img from '../../../public/temp/computer.png';

const ProductCardResponseve = () => {
  const rating = 4.5;
  const reviewsCount = 50;

  return (
    <article className={styles.card}>
      <div className={styles.img_container}>
        <Link href='#'>
          <Image src={img} alt='img' priority={true} />
        </Link>

        <button>
          <BsSuitHeart />
        </button>
      </div>

      <div className={styles.info_container}>
        <h2>
          <Link href='#'>
            Sistem Desktop PC Gaming Serioux Powered by ASUS cu procesor Intel®
            Core™ i3-10100F pana la 4.30GHz, 8GB DDR4, 480GB SSD, GeForce® GTX
            1650 4GB GDDR5, No OS
          </Link>
        </h2>

        <div className={styles.rating}></div>

        <p className={styles.bonus}></p>

        <div className={styles.priceing}>
          <p>100</p>
          <p>200</p>
        </div>

        <button className={styles.cart_btn}>buy</button>
      </div>
    </article>
  );
};

export default ProductCardResponseve;
