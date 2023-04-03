import styles from './TwitterBtn.module.scss';
import { FaTwitter } from 'react-icons/fa';

const TwitterBtn = () => {
  return (
    <button className={styles.twitter_btn}>
      <FaTwitter className={styles.icon} />
      <span>Twitter</span>
    </button>
  );
};

export default TwitterBtn;
