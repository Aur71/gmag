import styles from './InstagramBtn.module.scss';
import { BsInstagram } from 'react-icons/bs';

const InstagramBtn = () => {
  return (
    <button className={styles.instagram_btn}>
      <BsInstagram className={styles.icon} />
      <span>Instagram</span>
    </button>
  );
};

export default InstagramBtn;
