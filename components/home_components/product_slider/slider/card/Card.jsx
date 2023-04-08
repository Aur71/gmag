import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { FaOpencart } from 'react-icons/fa';
import { addToFavorites } from '@/redux/reducers/favoritesSlice';
import { addToCart } from '@/redux/reducers/cartSlice';

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
  const dispatch = useDispatch();
  const link = `/products/${productType}/${id}`;

  const dispatchAddToFavorites = () => {
    // CREATE A REQUEST TO THE BACKEND, AFTER THAT NOTIFY THE USER
    dispatch(addToFavorites(product));
  };

  const dispatchAddToCart = () => {
    // CREATE A REQUEST TO THE BACKEND, AFTER THAT NOTIFY THE USER
    dispatch(addToCart(product));
  };

  return (
    <article className={styles.card}>
      <button
        className={`${styles.favorite_btn}`}
        onClick={dispatchAddToFavorites}
      >
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

          <button className={styles.cart_btn} onClick={dispatchAddToCart}>
            <FaOpencart />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
