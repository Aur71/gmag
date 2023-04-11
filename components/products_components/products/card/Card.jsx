import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';

const Card = ({ product }) => {
  const {
    id,
    productType,
    name,
    img,
    currentPrice,
    oldPrice,
    rating,
    reviewsCount,
  } = product;
  const link = `/products/${productType}/${id}`;

  return (
    <article className={styles.card}>
      <button className={styles.favorite_btn}>
        <BsSuitHeart />
      </button>

      <Link href={link} className={styles.img_container}>
        <Image src={img} alt={name} width={350} height={350} priority={true} />
      </Link>

      <div className={styles.info_container}>
        <Link href={link}>
          <h2>{name}</h2>
        </Link>

        <div className={styles.rating_container}>
          <AiFillStar
            className={1 <= Math.round(rating) ? styles.star_clr : null}
          />
          <AiFillStar
            className={2 <= Math.round(rating) ? styles.star_clr : null}
          />
          <AiFillStar
            className={3 <= Math.round(rating) ? styles.star_clr : null}
          />
          <AiFillStar
            className={4 <= Math.round(rating) ? styles.star_clr : null}
          />
          <AiFillStar
            className={5 <= Math.round(rating) ? styles.star_clr : null}
          />
          <span>{rating}</span>
          <span>({reviewsCount})</span>
        </div>

        <div className={styles.flex_container}>
          <div className={styles.price_container}>
            <h3>${currentPrice}</h3>
            {oldPrice ? <h4>${oldPrice}</h4> : null}
          </div>

          <button className={styles.cart_btn}>
            <FaOpencart />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
