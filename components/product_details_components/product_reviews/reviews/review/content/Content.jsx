import styles from './Content.module.scss';
import { BsStarFill } from 'react-icons/bs';

const Content = ({ title, stars, content }) => {
  return (
    <div className={styles.content}>
      <h3>{title}</h3>
      <div className={styles.stars_container}>
        <BsStarFill className={`${1 <= stars && styles.active_star}`} />
        <BsStarFill className={`${2 <= stars && styles.active_star}`} />
        <BsStarFill className={`${3 <= stars && styles.active_star}`} />
        <BsStarFill className={`${4 <= stars && styles.active_star}`} />
        <BsStarFill className={`${5 <= stars && styles.active_star}`} />
      </div>

      <p>{content}</p>
    </div>
  );
};

export default Content;
