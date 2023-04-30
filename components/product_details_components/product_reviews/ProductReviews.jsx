import Header from './header/Header';
import Statistics from './statistics/Statistics';
import Filters from './filters/Filters';
import Reviews from './reviews/Reviews';
import styles from './ProductReviews.module.scss';

const ProductReviews = ({ product, reviewsData }) => {
  return (
    <section className={styles.product_reviews}>
      <div className={styles.center}>
        <Header reviewsCount={product.reviewsCount} />
        <Statistics reviewsData={reviewsData} product={product} />
        <Filters />
        <Reviews reviews={product.reviews} />
      </div>
    </section>
  );
};

export default ProductReviews;
