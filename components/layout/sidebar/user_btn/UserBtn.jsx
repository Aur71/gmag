import styles from './UserBtn.module.scss';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

const UserBtn = () => {
  const user = false;

  return (
    <div className={styles.user_btn}>
      {!user ? (
        <button>
          <AiOutlineLogin className={styles.icon} />
          Log in
        </button>
      ) : (
        <button>
          <AiOutlineLogout className={styles.icon} />
          Log out
        </button>
      )}
    </div>
  );
};

export default UserBtn;
