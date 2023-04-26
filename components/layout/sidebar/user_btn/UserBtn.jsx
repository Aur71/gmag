import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogout';
import Link from 'next/link';
import styles from './UserBtn.module.scss';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

const UserBtn = () => {
  const { user } = useSelector((state) => state.user);
  const { logout } = useLogout();

  return (
    <div className={styles.user_btn}>
      {!user ? (
        <Link href='/login'>
          <AiOutlineLogin className={styles.icon} />
          Log in
        </Link>
      ) : (
        <button onClick={logout}>
          <AiOutlineLogout className={styles.icon} />
          Log out
        </button>
      )}
    </div>
  );
};

export default UserBtn;
