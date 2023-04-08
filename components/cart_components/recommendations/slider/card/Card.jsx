import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';
import { FaOpencart } from 'react-icons/fa';
import { BsSuitHeart, BsStarFill } from 'react-icons/bs';

const Card = () => {
  const rating = 1.6;
  const reviewsCount = 10;
  const currentPrice = 1200;
  const oldPrice = 1300;

  return (
    <article className={styles.card}>
      <button className={styles.favorite_btn}>
        <BsSuitHeart />
      </button>

      <Link href='#' className={styles.img_container}>
        <Image
          src='/temp/laptop.png'
          alt='temp'
          width={250}
          height={250}
          priority={true}
        />
      </Link>

      <div className={styles.info_container}>
        <h3>
          PC Gaming GRT RGB with Intel® Core™ i5-10400F processor up to 4.30GHz,
          16GB DDR4, 1TB HDD, 480GB SSD, GeForce® RTX 2060 6GB GDDR6
        </h3>

        <div className={styles.rating}>
          <BsStarFill
            className={1 <= Math.round(rating) ? styles.star_clr : null}
          />
          <BsStarFill
            className={2 <= Math.round(rating) ? styles.star_clr : null}
          />
          <BsStarFill
            className={3 <= Math.round(rating) ? styles.star_clr : null}
          />
          <BsStarFill
            className={4 <= Math.round(rating) ? styles.star_clr : null}
          />
          <BsStarFill
            className={5 <= Math.round(rating) ? styles.star_clr : null}
          />
          <span>{rating}</span>
          <span>({reviewsCount})</span>
        </div>

        <div className={styles.flex_container}>
          <div className={styles.price_container}>
            {oldPrice ? <h5>{oldPrice}$</h5> : null}
            <h4>{currentPrice}$</h4>
          </div>

          <button>
            <FaOpencart />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
