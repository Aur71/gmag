import Link from 'next/link';
import styles from './Path.module.scss';
import { BiChevronRight } from 'react-icons/bi';

const Path = () => {
  return (
    <div className={styles.path}>
      <Link href='#'>
        Home
        <BiChevronRight className={styles.icon} />
      </Link>

      <Link href='#'>
        Products
        <BiChevronRight className={styles.icon} />
      </Link>

      <Link href='#'>
        Computers
        <BiChevronRight className={styles.icon} />
      </Link>

      <Link href='#'>#253</Link>
    </div>
  );
};

export default Path;
