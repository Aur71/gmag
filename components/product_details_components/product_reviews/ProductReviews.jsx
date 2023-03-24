import Header from './header/Header';
import Statistics from './statistics/Statistics';
import Filters from './filters/Filters';
import Reviews from './reviews/Reviews';
import styles from './ProductReviews.module.scss';

const ProductReviews = ({ reviewsData }) => {
  return (
    <section className={styles.product_reviews}>
      <div className={styles.center}>
        <Header reviewsCount={reviewsData.reviewsCount} />
        <Statistics reviewsData={reviewsData} />
        <Filters />
        <Reviews reviews={reviewsData.reviews} />
      </div>
    </section>
  );
};

export default ProductReviews;
