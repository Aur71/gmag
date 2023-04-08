import styles from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import ProductsNavigation from './ProductsNavigation';

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.layout.showSidebar);

  return (
    <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
      <ProductsNavigation />
    </aside>
  );
};

export default Sidebar;
