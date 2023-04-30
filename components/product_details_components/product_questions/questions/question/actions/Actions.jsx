import styles from './Actions.module.scss';
import { FaCommentMedical, FaComments } from 'react-icons/fa';

const Actions = ({
  numOfAnswers,
  showAddAnswer,
  setShowAddAnswer,
  showAnswers,
  setShowAnswers,
}) => {
  return (
    <div className={styles.actions}>
      <button onClick={() => setShowAddAnswer(!showAddAnswer)}>
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
