import styles from './Sidebar.module.scss';
import { useRouter } from 'next/router';
import { useGlobalContext } from '@/context/globalContext';
import ProductsNavigation from './ProductsNavigation';
import AccountNavigation from './AccountNavigation';

const Sidebar = () => {
  const { showSidebar } = useGlobalContext();
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
