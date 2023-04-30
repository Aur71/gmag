import Review from './review/Review';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './pagination/Pagination';
import styles from './Reviews.module.scss';
import sortData from './functions/sortReviews';
import filterData from './functions/filterReviews';
import searchData from './functions/searchReviews';

const Reviews = ({ reviews }) => {
  const { sortReviews, filterReviews, searchReviews } = useSelector(
    (state) => state.singleProduct
  );
  const reviewsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const lastReviewIndex = currentPage * reviewsPerPage;
  const fistReviewIndex = lastReviewIndex - reviewsPerPage;

  useEffect(() => {
    const scrollToTop = () => {
      const target = reviewsRef.current.offsetTop - 100;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    };

    scrollToTop();
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedReviews = sortData(reviews, sortReviews);
  const filteredReviews = filterData(sortedReviews, filterReviews);
  const searchedReviews = searchData(filteredReviews, searchReviews);
  const paginatedReviews = searchedReviews.slice(
    fistReviewIndex,
    lastReviewIndex
  );

  return (
    <div className={styles.reviews} ref={reviewsRef}>
      {paginatedReviews.map((review) => {
        return (
          <Review key={review._id} review={review} currentPage={currentPage} />
        );
      })}
      {reviews.length > reviewsPerPage ? (
        <Pagination
          totalReviews={searchedReviews.length}
          reviewsPerPage={reviewsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default Reviews;
