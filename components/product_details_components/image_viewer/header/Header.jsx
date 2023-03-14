import styles from './Header.module.scss';
import { MdClose } from 'react-icons/md';

const Header = () => {
  return (
    <div className={styles.header}>
      <button>
        <MdClose />
      </button>
    </div>
  );
};

export default Header;
