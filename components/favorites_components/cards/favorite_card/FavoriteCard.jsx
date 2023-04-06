import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FavoriteCard.module.scss';
import { BsStarFill } from 'react-icons/bs';
import { IoRemove } from 'react-icons/io5';
import { FaOpencart } from 'react-icons/fa';
import { removeProduct } from '@/redux/reducers/favoritesSlice';

const FavoriteCard = ({ product }) => {
  const dispatch = useDispatch();
  const { currentPrice, oldPrice, name, img, rating, reviewsCount, id } =
    product;

  const removeProductDispach = () => {
    // CREATE AN API CALL TO THE BACKEND THAT DELETES THE PRODUCT
    // IF THE PRODUCT IS DELETED SUCCESSFULLY ALSO REMOVE THE PRODUCT FROM THE STATE BY DISPATCH AN ACTION
    // IF THE PRODUCT IS NOT DELETED NOTIFY THE USER BY USING THE NOTIFICATIONS SYSTEM
    dispatch(removeProduct(id));
  };

  return (
    <article className={styles.favorite_card}>
      <div className={styles.img_container}>
        <Link href='#'>
          <Image
            src={img}
            alt={name}
            width={272}
            height={272}
            priority={true}
          />
        </Link>
      </div>

      <div className={styles.info_container}>
        <h2>
          <Link href='#'>{name}</Link>
        </h2>

        <div className={styles.rating}>
          <BsStarFill
            className={1 <= Math.round(rating) ? styles.active_star : null}
          />
          <BsStarFill
            className={2 <= Math.round(rating) ? styles.active_star : null}
          />
          <BsStarFill
            className={3 <= Math.round(rating) ? styles.active_star : null}
          />
          <BsStarFill
            className={4 <= Math.round(rating) ? styles.active_star : null}
          />
          <BsStarFill
            className={5 <= Math.round(rating) ? styles.active_star : null}
          />
          <span>{rating}</span>
          <span>({reviewsCount})</span>
        </div>

        <div className={styles.price_actions}>
          <h3 data-old-price={oldPrice ? `${oldPrice}$` : null}>
            {currentPrice}$
          </h3>

          <button>
            <FaOpencart />
          </button>

          <button onClick={removeProductDispach}>
            <IoRemove />
          </button>
        </div>
      </div>
    </article>
  );
};

export default FavoriteCard;
