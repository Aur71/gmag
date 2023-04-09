import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import Icons from './icons/Icons';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Icons />
    </nav>
  );
};

export default Navbar;
