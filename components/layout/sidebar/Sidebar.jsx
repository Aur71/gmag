import styles from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ProductsNavigation from './ProductsNavigation';
import AccountNavigation from './AccountNavigation';

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.layoutSlice.showSidebar);
  const router = useRouter();

  if (router.pathname === '/account/[id]') {
    return (
      <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
        <AccountNavigation />
      </aside>
    );
  }

  return (
    <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
      <ProductsNavigation />
    </aside>
  );
};

export default Sidebar;
