import { useState } from 'react';
import Comment from './comment/Comment';
import Pagination from '@/features/pagination/Pagination';
import styles from './Comments.module.scss';

const Comments = ({ comments, showComments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const fistItemIndex = lastItemIndex - itemsPerPage;
  const paginatedComments = comments.slice(fistItemIndex, lastItemIndex);

  return (
    <div className={`${styles.comments} ${showComments && styles.active}`}>
      {paginatedComments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
      {comments.length > itemsPerPage ? (
        <Pagination
          totalItems={comments.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default Comments;
