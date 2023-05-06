import styles from './Header.module.scss';
import formatDate from '@/utils/formatDate';

const Header = ({ question }) => {
  const { postedBy, createdAt } = question;
  const date = formatDate(createdAt);

  return (
    <div className={styles.header}>
      <div>
        <h4>
          By {postedBy.name} on {date}
        </h4>

        <div className={styles.dropdown_btn}>d</div>
      </div>

      <h3>{question.question}</h3>
    </div>
  );
};

export default Header;
