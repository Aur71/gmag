import Review from './review/Review';
import { useState } from 'react';
import Pagination from '@/features/pagination/Pagination';
import styles from './Reviews.module.scss';
import sortData from './functions/sortReviews';
import filterData from './functions/filterReviews';
import searchData from './functions/searchReviews';

const Reviews = ({ reviews, sortBy, filterBy, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const fistItemIndex = lastItemIndex - itemsPerPage;
  const sortedReviews = sortData(reviews, sortBy);
  const filteredReviews = filterData(sortedReviews, filterBy);
  const searchedReviews = searchData(filteredReviews, searchTerm);
  const paginatedReviews = searchedReviews.slice(fistItemIndex, lastItemIndex);

  return (
    <div className={styles.reviews}>
      {paginatedReviews.map((review) => {
        return (
          <Review key={review._id} review={review} currentPage={currentPage} />
        );
      })}
      {reviews.length > itemsPerPage ? (
        <Pagination
          totalItems={searchedReviews.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginationStyles={{ marginTop: '20px' }}
        />
      ) : null}
    </div>
  );
};

export default Reviews;
