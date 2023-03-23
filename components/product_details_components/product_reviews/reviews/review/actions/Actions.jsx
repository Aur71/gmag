import AddComment from './add_comment/AddComment';
import Comments from './comments/Comments';
import styles from './Actions.module.scss';
import { BiLike, BiCommentAdd, BiCommentDetail } from 'react-icons/bi';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.btns_container}>
        <button>
          <BiLike className={styles.icon} />
          <span>(0)</span>
        </button>

        <button>
          <BiCommentAdd className={styles.icon} />
          <span>Add comment</span>
        </button>

        <button>
          <BiCommentDetail className={styles.icon} />
          <span>View comments (0)</span>
        </button>
      </div>

      <AddComment />
      <Comments />
    </div>
  );
};

export default Actions;
