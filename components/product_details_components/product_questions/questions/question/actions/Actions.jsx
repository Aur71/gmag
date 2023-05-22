import { useDispatch, useSelector } from 'react-redux';
import styles from './Actions.module.scss';
import { FaCommentMedical, FaComments } from 'react-icons/fa';
import { addNotification } from '@/redux/reducers/notificationsSlice';

const Actions = ({
  numOfAnswers,
  showAddAnswer,
  setShowAddAnswer,
  showAnswers,
  setShowAnswers,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const addAnswer = async () => {
    if (!user) {
      dispatch(
        addNotification({ type: 'error', message: 'You must be logged in' })
      );
      return;
    }
    setShowAddAnswer(!showAddAnswer);
  };

  return (
    <div className={styles.actions}>
      <button onClick={addAnswer}>
        <FaCommentMedical className={styles.icon} /> <span>Add answer</span>
      </button>

      {numOfAnswers ? (
        <button onClick={() => setShowAnswers(!showAnswers)}>
          <FaComments className={styles.icon} /> <span>View answers</span>
          <span>({numOfAnswers})</span>
        </button>
      ) : null}
    </div>
  );
};

export default Actions;
