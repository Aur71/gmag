import styles from './ProductCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import laptop from '../../../public/temp/laptop.png';
import { BsSuitHeart } from 'react-icons/bs';
// import { BsSuitHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';

const ProductCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.img_container}>
        <button className={`${styles.favorite_btn}`}>
          <BsSuitHeart />
        </button>

        <Link href='#'>
          <Image src={laptop} alt='product image' priority={true} />
        </Link>
      </div>

      <div className={styles.info_container}>
        <h3>
          <Link href='#'>Apple MacBook Pro 13,3 Dark edition</Link>
        </h3>

        <h4>Apple</h4>

        <div className={styles.rating_container}>
          <AiFillStar className={styles.icon} />
          <AiFillStar className={styles.icon} />
          <AiFillStar className={styles.icon} />
          <AiFillStar className={styles.icon} />
          <AiFillStar className={styles.icon} />
          <span>4.7</span>
          <span>(25 reviews)</span>
        </div>

        <div className={styles.price_container}>
          <p className={styles.price}>$290.99</p>
          <p className={styles.old_price}>$390.99</p>

          <button className={styles.cart_btn}>
            <MdShoppingCart />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
