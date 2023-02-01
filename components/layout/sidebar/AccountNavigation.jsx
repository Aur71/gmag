import styles from './Sidebar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { links } from '@/data/account-links';
import { BiCategory } from 'react-icons/bi';
import { RxExit } from 'react-icons/rx';

const AccountNavigation = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.links_container}>
        <h3>
          <BiCategory className={styles.icon} />
          Account
        </h3>

        <ul>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`${router.asPath === item.path && styles.active}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.user_container}>
        <button className={styles.active}>
          <RxExit className={styles.icon} />
          Log Out
        </button>
      </div>
    </>
  );
};

export default AccountNavigation;
