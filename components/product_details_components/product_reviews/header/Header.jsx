import styles from './Header.module.scss';
import { MdEdit } from 'react-icons/md';

const Header = ({ reviewsCount }) => {
  return (
    <div className={styles.header}>
      <h2>
        Reviews{' '}
        <span>
          {' '}
          ({reviewsCount}) {reviewsCount === 1 ? 'review' : 'reviews'}
        </span>
      </h2>

      <button>
        <span>Add review</span> <MdEdit className={styles.icon} />
      </button>
    </div>
  );
};

export default Header;
