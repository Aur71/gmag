import { useState, useEffect } from 'react';
import { useEditComment } from '@/hooks/product_review/useEditComment';
import styles from './EditComment.module.scss';

const EditComment = ({ comment, setShowEditComment, review }) => {
  const [newComment, setNewComment] = useState('');
  const { editComment, loading } = useEditComment();

  const handleNewComment = (e) => {
    if (e.target.value.length <= 500) setNewComment(e.target.value);
  };

  useEffect(() => {
    setNewComment(comment.content);
  }, [comment]);

  return (
    <div className={styles.edit_comment}>
      <textarea
        value={newComment}
        onChange={handleNewComment}
        placeholder='Add comment...'
      />

      <div className={styles.btn_container}>
        <button
          onClick={() =>
            editComment(
              comment,
              review,
              newComment,
              setShowEditComment,
              setNewComment
            )
          }
          disabled={loading}
        >
          Save
        </button>
        <button onClick={() => setShowEditComment(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default EditComment;
