import { useState } from 'react';
import styles from './AddComment.module.scss';

const AddComment = ({ showAddComment, setShowAddComment }) => {
  const [comment, setComment] = useState('');

  const handleComment = (e) => {
    if (e.target.value.length <= 5000) setComment(e.target.value);
  };

  return (
    <div className={`${styles.add_comment} ${showAddComment && styles.active}`}>
      <div className={styles.textarea_container}>
        <textarea
          name='comment'
          id='comment'
          placeholder='Write a comment'
          value={comment}
          onChange={handleComment}
        />
        <span>{comment.length} / 5000</span>
      </div>

      <div className={styles.btns_container}>
        <button>Add comment</button>
        <button onClick={() => setShowAddComment(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddComment;
