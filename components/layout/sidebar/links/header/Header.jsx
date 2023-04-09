import { BiCategory } from 'react-icons/bi';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <h3 className={styles.header}>
      <BiCategory className={styles.icon} />
      Products
    </h3>
  );
};

export default Header;
