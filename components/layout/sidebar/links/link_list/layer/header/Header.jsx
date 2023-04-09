import styles from './Header.module.scss';
import { FiChevronLeft } from 'react-icons/fi';

const Header = ({ title, setIsLayerActive }) => {
  return (
    <div className={styles.header}>
      <button onClick={() => setIsLayerActive(false)}>
        <FiChevronLeft className={styles.icon} />
      </button>

      <h4>{title}</h4>
    </div>
  );
};

export default Header;
