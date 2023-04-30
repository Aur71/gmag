import Chart from './chart/Chart';
import Rating from './rating/Rating';
import Recommendation from './recommendation/Recommendation';
import styles from './Statistics.module.scss';
import getReviewsData from './getReviewsData';

const Statistics = ({ product, setFilterBy }) => {
  const reviewsData = getReviewsData(product.reviews);

  return (
    <div className={styles.statistics}>
      <Chart
        reviewsCount={product.reviewsCount}
        reviewsData={reviewsData}
        setFilterBy={setFilterBy}
      />
      <Rating rating={product.rating} />
      <Recommendation
        reviewsData={reviewsData}
        reviewsCount={product.reviewsCount}
      />
    </div>
  );
};

export default Statistics;
