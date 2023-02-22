import styles from './ProductCardResponseve.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BsSuitHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
// import { BsSuitHeartFill } from 'react-icons/bs';

// TEMP
import img from '../../../public/temp/computer.png';

const ProductCardResponseve = () => {
  const rating = 4.4;
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

        <div className={styles.rating}>
          <AiFillStar
            className={`${styles.star} ${
              Math.round(rating) >= 1 && styles.active
            }`}
          />
          <AiFillStar
            className={`${styles.star} ${
              Math.round(rating) >= 2 && styles.active
            }`}
          />
          <AiFillStar
            className={`${styles.star} ${
              Math.round(rating) >= 3 && styles.active
            }`}
          />
          <AiFillStar
            className={`${styles.star} ${
              Math.round(rating) >= 4 && styles.active
            }`}
          />
          <AiFillStar
            className={`${styles.star} ${
              Math.round(rating) >= 5 && styles.active
            }`}
          />
          <p>{rating}</p>
          <p>({reviewsCount})</p>
        </div>

        <p className={styles.bonus}>
          Delivery: <span>tomorrow</span>
        </p>

        <div className={styles.priceing}>
          <p>4900.99 $</p>
          <p>4500.99 $</p>
        </div>

        <button className={styles.cart_btn}>
          <MdShoppingCart className={styles.icon} />
          <span>Add to cart</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCardResponseve;
