import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './Icons.module.scss';
import { FiHeart, FiUser } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';

const Icons = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className={styles.icons}>
      <Link href='/favorites' className={styles.favorites_link}>
        <FiHeart />
      </Link>

      <Link href='/cart' className={styles.cart_link}>
        <BsCart3 />
        <span>{cart.length}</span>
      </Link>

      <Link
        href={`${user ? '/account' : '/login'}`}
        className={styles.account_link}
      >
        <FiUser />
      </Link>
    </div>
  );
};

export default Icons;
