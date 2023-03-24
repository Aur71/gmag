import { useState } from 'react';
import Comment from './comment/Comment';
import Pagination from './pagination/Pagination';
import styles from './Comments.module.scss';

const Comments = ({ comments, showComments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 15;
  const lastCommentIndex = currentPage * commentsPerPage;
  const fistCommentIndex = lastCommentIndex - commentsPerPage;
  const paginatedComments = comments.slice(fistCommentIndex, lastCommentIndex);

  return (
    <div className={`${styles.comments} ${showComments && styles.active}`}>
      {paginatedComments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      {comments.length > commentsPerPage ? (
        <Pagination
          totalComments={comments.length}
          commentsPerPage={commentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default Comments;
