import Image from 'next/image';
import Link from 'next/link';
import styles from './Author.module.scss';
import userImg from '../../../../../../public/user.png';

const Author = () => {
  return (
    <div className={styles.author}>
      <Link href='#'>
        <Image src={userImg} alt='user image' width={60} height={60} />
      </Link>
      <h4>Author Name</h4>
      <p>18 Mar 2023</p>
    </div>
  );
};

export default Author;
