import Image from 'next/image';
import Link from 'next/link';
import styles from './Author.module.scss';
import formatDate from '@/utils/formatDate';

const Author = ({ createdAt, postedBy }) => {
  const date = formatDate(createdAt);

  return (
    <div className={styles.author}>
      <Image
        src={postedBy.profileImage}
        alt={postedBy.name}
        width={60}
        height={60}
      />
      <div>
        <h4>{postedBy.name}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Author;
