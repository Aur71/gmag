import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';

const Card = ({ product }) => {
  const {
    oldPrice,
    currentPrice,
    name,
    img,
    rating,
    reviewsCount,
    productType,
    id,
  } = product;
  const link = `/products/${productType}/${id}`;

  return (
    <article className={styles.card}>
      <button className={`${styles.favorite_btn}`}>
        <BsSuitHeart />
      </button>

      <Link href={link} className={styles.img_container}>
        <Image src={img} alt={name} priority={true} width={240} height={240} />
      </Link>

      <div className={styles.info_container}>
        <h3>
          <Link href={link}>{name}</Link>
        </h3>

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
          <span>({reviewsCount} reviews)</span>
        </div>

        <div className={styles.flex_container}>
          <div className={styles.price_container}>
            <p>${currentPrice}</p>
            {oldPrice ? <p>${oldPrice}</p> : null}
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
