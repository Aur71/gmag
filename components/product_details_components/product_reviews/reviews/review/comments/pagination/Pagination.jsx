import styles from './Pagination.module.scss';

const Pagination = ({
  totalComments,
  commentsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => {
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${currentPage === page && styles.active}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
