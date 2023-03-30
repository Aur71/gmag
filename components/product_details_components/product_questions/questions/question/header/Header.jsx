import styles from './Header.module.scss';
import formatDate from '@/utils/formatDate';

const Header = ({ postedOn, postedBy, question }) => {
  const { userName } = postedBy;
  const date = formatDate(postedOn);

  return (
    <div className={styles.header}>
      <h4>
        By {userName} on {date}
      </h4>
      <h3>{question}</h3>
    </div>
  );
};

export default Header;
