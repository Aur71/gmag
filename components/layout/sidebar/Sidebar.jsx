import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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
  // const [mobile, setMobile] = useState(false);

  useEffect(() => {
    dispatch(closeSidebar());
  }, [router.asPath, dispatch]);

  // useEffect(() => {
  //   function hasTouchscreen() {
  //     return (
  //       'ontouchstart' in window ||
  //       navigator.maxTouchPoints > 0 ||
  //       navigator.msMaxTouchPoints > 0
  //     );
  //   }
  //   if (hasTouchscreen()) setMobile(true);
  // }, []);

  return (
    <aside
      className={`${styles.sidebar} ${showSidebar && styles.active} ${
        mobile && styles.mobile
      }`}
    >
      <div className={styles.center}>
        <Searchbar />
        <Links />
        <UserBtn />
      </div>
    </aside>
  );
};

export default Sidebar;
