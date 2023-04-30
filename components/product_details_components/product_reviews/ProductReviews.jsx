import { useState } from 'react';
import Header from './header/Header';
import Statistics from './statistics/Statistics';
import Filters from './filters/Filters';
import Reviews from './reviews/Reviews';
import styles from './ProductReviews.module.scss';

const ProductReviews = ({ product, reviewsData }) => {
  const [sortBy, setSortBy] = useState('Newest');
  const [filterBy, setFilterBy] = useState('All reviews');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className={styles.product_reviews}>
      <div className={styles.center}>
        <Header reviewsCount={product.reviewsCount} />
        <Statistics reviewsData={reviewsData} product={product} />
        <Filters
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Reviews
          reviews={product.reviews}
          sortBy={sortBy}
          filterBy={filterBy}
          searchTerm={searchTerm}
        />
      </div>
    </section>
  );
};

export default ProductReviews;
