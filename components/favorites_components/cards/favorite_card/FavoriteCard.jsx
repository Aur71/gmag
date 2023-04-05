import Link from 'next/link';
import Image from 'next/image';
import styles from './FavoriteCard.module.scss';
import { BsStarFill } from 'react-icons/bs';
import { IoRemove } from 'react-icons/io5';
import { FaOpencart } from 'react-icons/fa';

const FavoriteCard = () => {
  const rating = 3.5;
  const oldPrice = 39.99;

  return (
    <article className={styles.favorite_card}>
      <div className={styles.img_container}>
        <Link href='#'>
          <Image
            src='/temp/computer.png'
            alt='temp'
            width={272}
            height={272}
            priority={true}
          />
        </Link>
      </div>

      <div className={styles.info_container}>
        <h2>
          <Link href='#'>
            PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to
            4.30GHz, 16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6
          </Link>
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
          <span>(20)</span>
        </div>

        <div className={styles.price_actions}>
          <h3 data-old-price={oldPrice}>2999.99$</h3>

          <button>
            <FaOpencart />
          </button>

          <button>
            <IoRemove />
          </button>
        </div>
      </div>
    </article>
  );
};

export default FavoriteCard;
