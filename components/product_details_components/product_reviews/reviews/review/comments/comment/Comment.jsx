import Image from 'next/image';
import Link from 'next/link';
import styles from './Comment.module.scss';

const Comment = ({ comment }) => {
  const { content, postedOn, postedBy } = comment;

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
          <p>{postedOn}</p>
        </div>
      </div>

      <p>{content}</p>
    </div>
  );
};

export default Comment;
