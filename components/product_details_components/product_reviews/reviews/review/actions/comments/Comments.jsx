import Comment from './comment/Comment';
import Pagination from './pagination/Pagination';
import styles from './Comments.module.scss';

const Comments = () => {
  return (
    <div className={styles.comments}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Pagination />
    </div>
  );
};

export default Comments;
