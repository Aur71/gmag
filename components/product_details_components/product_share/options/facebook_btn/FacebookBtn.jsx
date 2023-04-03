import styles from './FacebookBtn.module.scss';
import { FaFacebookF } from 'react-icons/fa';

const FacebookBtn = () => {
  return (
    <button className={styles.facebook_btn}>
      <FaFacebookF className={styles.icon} />
      <span>Facebook</span>
    </button>
  );
};

export default FacebookBtn;
