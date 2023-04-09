import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.scss';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { handleSidebar } from '@/redux/reducers/layoutSlice';

const Logo = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.logo}>
      <button onClick={() => dispatch(handleSidebar())}>
        <AiOutlineMenuFold />
      </button>

      <Link href='/'>
        <Image
          src='/logo.png'
          alt='GMAG logo'
          width={100}
          height={50}
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Logo;
