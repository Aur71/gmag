import styles from './Answer.module.scss';
import formatDate from '@/utils/formatDate';

const Answer = ({ answer }) => {
  const { userName } = answer.postedBy;
  const date = formatDate(answer.postedOn);

  return (
    <div className={styles.answer}>
      <h6>
        By {userName} on {date}
      </h6>
      <h5>{answer.answer}</h5>
    </div>
  );
};

export default Answer;
