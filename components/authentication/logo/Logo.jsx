import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.scss';
import logo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      <Image src={logo} alt='logo' priority={true} />
    </Link>
  );
};

export default Logo;
