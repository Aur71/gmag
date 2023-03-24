import styles from './Actions.module.scss';
import { BiLike, BiCommentAdd, BiCommentDetail } from 'react-icons/bi';

const Actions = ({
  likes,
  numberOfComments,
  showAddComment,
  setShowAddComment,
  showComments,
  setShowComments,
}) => {
  return (
    <div className={styles.actions}>
      <div className={styles.btns_container}>
        <button>
          <BiLike className={styles.icon} />
          <span>({likes})</span>
        </button>

        <button onClick={() => setShowAddComment(!showAddComment)}>
          <BiCommentAdd className={styles.icon} />
          <span>Add comment</span>
        </button>

        <button onClick={() => setShowComments(!showComments)}>
          <BiCommentDetail className={styles.icon} />
          <span>View comments</span>
          <span>({numberOfComments})</span>
        </button>
      </div>
    </div>
  );
};

export default Actions;
