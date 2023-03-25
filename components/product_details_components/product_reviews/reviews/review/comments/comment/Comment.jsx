import Image from 'next/image';
import Link from 'next/link';
import styles from './Comment.module.scss';
import formatDate from '@/utils/formatDate';

const Comment = ({ comment }) => {
  const { content, postedOn, postedBy } = comment;
  const date = formatDate(postedOn);

  return (
    <div className={styles.comment}>
      <div className={styles.author}>
        <Link href={`/user/${postedBy.userId}/reviews`}>
          <Image
            src={postedBy.userImg}
            alt='user image'
            width={50}
            height={50}
          />
        </Link>

        <div>
          <h5>{postedBy.userName}</h5>
          <p>{date}</p>
        </div>
      </div>

      <p>{content}</p>
    </div>
  );
};

export default Comment;
