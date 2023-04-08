import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { HiOutlineHeart } from 'react-icons/hi';

const Card = ({ product }) => {
  const {
    id,
    productType,
    currentPrice,
    oldPrice,
    img,
    name,
    totalStock,
    count,
  } = product;
  const link = `/products/${productType}/${id}`;

  return (
    <article className={styles.card}>
      <Link href={link} className={styles.img_container}>
        <Image src={img} alt={name} width={150} height={150} priority={true} />
      </Link>

      <div className={styles.flex_wrapper}>
        <div className={styles.info_container}>
          <h2>
            <Link href={link}>{name}</Link>
          </h2>

          <p>
            Availability: <span>limited stock</span>
          </p>

          <div className={styles.price_container}>
            {oldPrice ? <h4>{oldPrice}$</h4> : null}
            <h3>{currentPrice}$</h3>
          </div>

          <div className={styles.btns_container}>
            <button>
              <span>Move to favorites</span>
              <HiOutlineHeart className={styles.icon} />
            </button>
            <button>
              <span>Remove</span>
              <AiOutlineCloseCircle className={styles.icon} />
            </button>
          </div>
        </div>

        <div className={styles.actions_container}>
          <button>
            <AiFillPlusCircle />
          </button>
          <span>{count}</span>
          <button>
            <AiFillMinusCircle />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
