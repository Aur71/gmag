import Image from 'next/image';
import styles from './Comment.module.scss';
import formatDate from '@/utils/formatDate';

const Comment = ({ comment }) => {
  const { content, createdAt, postedBy } = comment;
  const date = formatDate(createdAt);

  return (
    <div className={styles.comment}>
      <div className={styles.author}>
        <Image
          src={postedBy.profileImage}
          alt='user image'
          width={50}
          height={50}
        />

        <div>
          <h5>{postedBy.name}</h5>
          <p>{date}</p>
        </div>
      </div>

      <p>{content}</p>
    </div>
  );
};

export default Comment;
