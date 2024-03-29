import { useEffect, useRef } from 'react';
import styles from './Pagination.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  paginationStyles,
}) => {
  const paginationRef = useRef(null);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const scrollUp = () => {
    if (paginationRef.current.parentNode.offsetTop) {
      window.scrollTo({
        top: paginationRef.current.parentNode.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  const setPage = (page) => {
    setCurrentPage(page);
    scrollUp();
  };

  const decreaseCurrentPage = () => {
    if (currentPage - 1 <= 0) return;
    setPage(currentPage - 1);
  };
  const increaseCurrentPage = () => {
    if (currentPage + 1 > totalPages) return;
    setPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentPage >= totalPages && totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage, setCurrentPage]);

  return (
    <div
      className={styles.pagination}
      ref={paginationRef}
      style={paginationStyles}
    >
      <button className={styles.slide_left} onClick={decreaseCurrentPage}>
        <BsChevronLeft />
      </button>

      {totalPages <= 6 ? (
        <>
          {pages.map((page) => {
            return (
              <button
                key={page}
                onClick={() => setPage(page)}
                className={`${currentPage === page && styles.active}`}
              >
                {page}
              </button>
            );
          })}
        </>
      ) : (
        <>
          {currentPage === 1 ? (
            <>
              <button
                onClick={() => setPage(1)}
                className={`${currentPage === 1 && styles.active}`}
              >
                1
              </button>
              <button onClick={() => setPage(2)}>2</button>
              <button onClick={() => setPage(3)}>3</button>
              <button className={styles.disabled}>...</button>
              <button onClick={() => setPage(totalPages)}>{totalPages}</button>
            </>
          ) : null}

          {currentPage === totalPages ? (
            <>
              <button onClick={() => setPage(1)}>1</button>
              <button className={styles.disabled}>...</button>
              <button onClick={() => setPage(totalPages - 2)}>
                {totalPages - 2}
              </button>
              <button onClick={() => setPage(totalPages - 1)}>
                {totalPages - 1}
              </button>
              <button
                onClick={() => setPage(totalPages)}
                className={`${currentPage === totalPages && styles.active}`}
              >
                {totalPages}
              </button>
            </>
          ) : null}

          {currentPage !== 1 && currentPage !== totalPages ? (
            <>
              {currentPage - 2 >= 1 ? (
                <>
                  <button onClick={() => setPage(1)}>1</button>
                  <button className={styles.disabled}>...</button>
                </>
              ) : null}

              <button onClick={() => setPage(currentPage - 1)}>
                {currentPage - 1}
              </button>
              <button
                onClick={() => setPage(currentPage)}
                className={styles.active}
              >
                {currentPage}
              </button>
              <button onClick={() => setPage(currentPage + 1)}>
                {currentPage + 1}
              </button>

              {currentPage + 2 <= totalPages ? (
                <>
                  <button className={styles.disabled}>...</button>
                  <button onClick={() => setPage(totalPages)}>
                    {totalPages}
                  </button>
                </>
              ) : null}
            </>
          ) : null}
        </>
      )}

      <button className={styles.slide_right} onClick={increaseCurrentPage}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
