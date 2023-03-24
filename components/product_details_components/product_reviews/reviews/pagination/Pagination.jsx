import styles from './Pagination.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = ({
  totalReviews,
  reviewsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const decreaseCurrentPage = () => {
    if (currentPage - 1 <= 0) return;
    setCurrentPage(currentPage - 1);
  };
  const increaseCurrentPage = () => {
    if (currentPage + 1 > totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.slide_left} onClick={decreaseCurrentPage}>
        <BsChevronLeft />
      </button>

      {totalPages <= 7 ? (
        <>
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
        </>
      ) : (
        <>
          <p>Add new condtions</p>
        </>
      )}

      <button className={styles.slide_right} onClick={increaseCurrentPage}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
