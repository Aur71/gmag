import styles from './Sidebar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/data/sidebar-links';
import { BiSearchAlt, BiCategory } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';
import userImg from '../../../public/user.png';

const ProductsNavigation = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.searchbar_container}>
        <input type='text' placeholder='Search...' />
        <button>
          <BiSearchAlt />
        </button>
      </div>

      <div className={styles.links_container}>
        <h3>
          <BiCategory className={styles.icon} />
          Products
        </h3>

        <ul>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`${router.asPath === item.path && styles.active}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Link href='#' className={styles.help_link}>
        <BsQuestionCircle className={styles.icon} />
        Help
      </Link>

      <div className={styles.user_container}>
        <Link href='#' className={styles.account_link}>
          <Image src={userImg} alt='default user img' />
        </Link>

        <button>
          <RxExit className={styles.icon} />
          Log In
        </button>
      </div>
    </>
  );
};

export default ProductsNavigation;
