import styles from './Header.module.scss';
import formatDate from '@/utils/formatDate';

const Header = ({ question }) => {
  const { postedBy, createdAt } = question;
  const date = formatDate(createdAt);

  return (
    <div className={styles.header}>
      <h4>
        By {postedBy.name} on {date}
      </h4>
      <h3>{question.question}</h3>
    </div>
  );
};

export default Header;
