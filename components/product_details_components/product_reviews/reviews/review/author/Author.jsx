import Image from 'next/image';
import Link from 'next/link';
import styles from './Author.module.scss';

const Author = ({ postedOn, postedBy }) => {
  const { userImg, userName, userId } = postedBy;

  return (
    <div className={styles.author}>
      <Link href={`/account/reviews/${userId}`}>
        <Image src={userImg} alt='user image' width={60} height={60} />
      </Link>
      <div>
        <h4>{userName}</h4>
        <p>{postedOn}</p>
      </div>
    </div>
  );
};

export default Author;
