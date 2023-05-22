import { useState } from 'react';
import { useAddComment } from '@/hooks/product_review/useAddComment';
import styles from './AddComment.module.scss';

const AddComment = ({ showAddComment, setShowAddComment, reviewId }) => {
  const [comment, setComment] = useState('');
  const { addComment, loading } = useAddComment();

  const handleComment = (e) => {
    if (e.target.value.length <= 500) setComment(e.target.value);
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
        <span>{comment.length} / 500</span>
      </div>

      <div className={styles.btns_container}>
        <button
          onClick={() =>
            addComment(comment, reviewId, setShowAddComment, setComment)
          }
          disabled={loading}
        >
          Add comment
        </button>
        <button onClick={() => setShowAddComment(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddComment;
