import styles from './ProductCardResponseve.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BsSuitHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';

// TEMP
import img1 from '../../../public/temp/computer.png';
import img2 from '../../../public/temp/laptop.png';

const ProductCardResponseve = ({ item }) => {
  const rating = item.rating;
  const reviewsCount = item.reviewsCount;
  const { productType } = item;
  console.log(productType);

  return (
    <article className={styles.card}>
      <div className={styles.img_container}>
        <Link href='#'>
          {productType === 'laptop' ? (
            <Image src={img1} alt='img' priority={true} />
          ) : (
            <Image src={img2} alt='img' priority={true} />
          )}
        </Link>

        <button>
          <BsSuitHeart />
        </button>
      </div>

      <div className={styles.info_container}>
        <h2>
          <Link href='#'>{item.name}</Link>
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
          <p className={`${!item.oldPrice && styles.inactive}`}>
            {item.oldPrice} $
          </p>
          <p>{item.currentPrice} $</p>
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
