import styles from './Header.module.scss';
import { MdEdit } from 'react-icons/md';

const Header = ({ numOfQuestions }) => {
  return (
    <div className={styles.header}>
      <h2>
        Questions & Answers <span>({numOfQuestions})</span>
      </h2>

      <button>
        <span>Add question</span> <MdEdit className={styles.icon} />
      </button>
    </div>
  );
};

export default Header;
