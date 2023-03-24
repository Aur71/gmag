import Review from './review/Review';
import { useState } from 'react';
import Pagination from './pagination/Pagination';
import styles from './Reviews.module.scss';

const Reviews = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 1;
  const lastReviewIndex = currentPage * reviewsPerPage;
  const fistCommentIndex = lastReviewIndex - reviewsPerPage;
  const paginatedReviews = reviews.slice(fistCommentIndex, lastReviewIndex);

  return (
    <div className={styles.reviews}>
      {paginatedReviews.map((review, index) => {
        return <Review key={index} review={review} />;
      })}
      {reviews.length > reviewsPerPage ? (
        <Pagination
          totalReviews={reviews.length}
          reviewsPerPage={reviewsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default Reviews;
