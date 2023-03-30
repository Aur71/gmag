import styles from './Header.module.scss';
import { MdEdit } from 'react-icons/md';

const Header = ({ numOfQuestions, showAddQuestion, setShowAddQuestion }) => {
  return (
    <div className={styles.header}>
      <h2>
        Questions & Answers <span>({numOfQuestions})</span>
      </h2>

      <button onClick={() => setShowAddQuestion(!showAddQuestion)}>
        <span>Add question</span> <MdEdit className={styles.icon} />
      </button>
    </div>
  );
};

export default Header;
