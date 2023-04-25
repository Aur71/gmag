import styles from './GoogleBtn.module.scss';
import { AiOutlineGoogle } from 'react-icons/ai';

const GoogleBtn = () => {
  return (
    <button className={styles.google_btn}>
      <span>
        <AiOutlineGoogle />
      </span>
      <span>Google</span>
    </button>
  );
};

export default GoogleBtn;
