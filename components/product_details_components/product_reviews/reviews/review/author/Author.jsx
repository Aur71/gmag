import Image from 'next/image';
import Link from 'next/link';
import styles from './Author.module.scss';
import formatDate from '@/utils/formatDate';

const Author = ({ postedOn, postedBy }) => {
  const { userImg, userName, userId } = postedBy;
  const date = formatDate(postedOn);

  return (
    <div className={styles.author}>
      <Link href={`/account/reviews/${userId}`}>
        <Image src={userImg} alt='user image' width={60} height={60} />
      </Link>
      <div>
        <h4>{userName}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Author;
