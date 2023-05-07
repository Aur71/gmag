import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Searchbar from './searchbar/Searchbar';
import Links from './links/Links';
import UserBtn from './user_btn/UserBtn';
import styles from './Sidebar.module.scss';
import { closeSidebar } from '@/redux/reducers/layoutSlice';

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.layout.showSidebar);

  useEffect(() => {
    dispatch(closeSidebar());
  }, [router.asPath, dispatch]);

  return (
    <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
      <div className={styles.center}>
        <Searchbar />
        <Links />
        <UserBtn />
      </div>
    </aside>
  );
};

export default Sidebar;
