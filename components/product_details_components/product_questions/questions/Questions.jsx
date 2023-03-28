import Question from './question/Question';
import Pagination from './pagination/Pagination';
import styles from './Questions.module.scss';

const Questions = ({ questions }) => {
  return (
    <div className={styles.questions}>
      Questions
      <Question />
      <Pagination />
    </div>
  );
};

export default Questions;
