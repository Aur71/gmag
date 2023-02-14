import styles from './Navbar.module.scss';
import { useDispatch } from 'react-redux';
import { handleSidebar } from '@/redux/layout/layoutSlice';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { BsSuitHeart, BsCart3 } from 'react-icons/bs';
import userImg from '../../../public/user.png';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <button onClick={() => dispatch(handleSidebar())}>
          <AiOutlineMenuFold />
        </button>

        <Link href='/'>
          <Image src={logo} alt='logo' priority={true} />
        </Link>
      </div>

      <div className={styles.search_container}>
        <input type='search' placeholder='Search...' />

        <button>
          <CiSearch />
        </button>
      </div>

      <ul className={styles.icons_container}>
        <li className={styles.favorites_link}>
          <Link href='/favorites'>
            <BsSuitHeart />
          </Link>
        </li>

        <li className={styles.cart_link}>
          <Link href='/cart'>
            <BsCart3 />
            <span>5</span>
          </Link>
        </li>

        <li className={styles.account_link}>
          <Link href='/account/id'>
            <Image src={userImg} alt='default user img' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
