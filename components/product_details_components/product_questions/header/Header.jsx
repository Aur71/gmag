import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { MdEdit } from 'react-icons/md';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Header = ({ numOfQuestions, showAddQuestion, setShowAddQuestion }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleAddQuestion = () => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in.' })
      );
      return;
    }
    setShowAddQuestion(!showAddQuestion);
  };

  return (
    <div className={styles.header}>
      <h2>
        Questions & Answers <span>({numOfQuestions})</span>
      </h2>

      <button onClick={handleAddQuestion}>
        <span>Add question</span> <MdEdit className={styles.icon} />
      </button>
    </div>
  );
};

export default Header;
