import { useSelector } from 'react-redux';
import Searchbar from './searchbar/Searchbar';
import Links from './links/Links';
import UserBtn from './user_btn/UserBtn';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.layout.showSidebar);

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
