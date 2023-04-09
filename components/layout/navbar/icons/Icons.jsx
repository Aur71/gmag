import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Icons.module.scss';
import { BsSuitHeart, BsCart3 } from 'react-icons/bs';

const Icons = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <ul className={styles.icons}>
      <li className={styles.favorites_link}>
        <Link href='/favorites'>
          <BsSuitHeart />
        </Link>
      </li>

      <li className={styles.cart_link}>
        <Link href='/cart'>
          <BsCart3 />
          <span>{cart.length}</span>
        </Link>
      </li>

      <li className={styles.account_link}>
        <Link href='/account/id'>
          <Image
            src='/user.png'
            width={55}
            height={55}
            priority={true}
            alt='default user img'
          />
        </Link>
      </li>
    </ul>
  );
};

export default Icons;
