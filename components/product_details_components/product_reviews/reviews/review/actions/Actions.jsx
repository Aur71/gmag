import AddComment from './add_comment/AddComment';
import Comments from './comments/Comments';
import styles from './Actions.module.scss';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.btns_container}>Buttons</div>
      <AddComment />
      <Comments />
    </div>
  );
};

export default Actions;
